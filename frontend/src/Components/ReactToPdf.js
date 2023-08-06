import React, {useEffect, useRef, useState} from 'react';
import Home from './Home';
import './ReactToPdf.css'
import { useReactToPrint } from 'react-to-print';


const ReactToPdf = () => {
    // let tt;
    const[toolTipContent, settoolTipContent] = useState();
    const[toolTipButtonPos, settoolTipButtonPos] = useState();
    // const[isShown, setIsShown] = useState(false);
    console.log(toolTipButtonPos);
    useEffect(() => {
        fetchToolKitButtonMessage();
    },[]
    )
    // console.log(toolTipButtonPos.toLowerCase());
    const fetchToolKitButtonMessage = async () => {
        try{
            const resData = await fetch('http://localhost:5000/api/tooltip/button');
            const message = await resData.json();
            settoolTipContent(message.data.mess);
            settoolTipButtonPos(message.data.pos);
            // tt = message.data.mess;
        }
        catch(error){
            console.log('Can not load message', error);
        }
    }
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content : () => componentRef.current,
        documentTitle : 'to_pdf',
    });

    return (
        <> 
            <div ref = {componentRef} style = {{width : '100%', height : window.innerHeight}}>
                <Home></Home>
                <button className = 'button_plus tooltip' onClick={handlePrint}>
                    <span className={`tooltiptext ${toolTipButtonPos}`}>{toolTipContent}</span>`
                </button>
            </div>
        </>
    )
}

export default ReactToPdf;