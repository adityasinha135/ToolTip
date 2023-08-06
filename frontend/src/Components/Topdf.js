import React, { useRef, useEffect, useState} from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import Home from './Home';
import './Topdf.css';

const Topdf = () => {
  const contentRef = useRef(null);

  const[tootTipContent, settoolTipContent] = useState();
  const[isShown, setIsShown] = useState(false);

  useEffect(() => {
      fetchToolKitButtonMessage();
  },[]
  )

  const fetchToolKitButtonMessage = async () => {
      try{
          const resData = await fetch('http://localhost:5000/api/toolkit/button');
          const message = await resData.json();
          settoolTipContent(message.data);
      }
      catch(error){
          console.log('Can not load message', error);
      }
  }

  const handleDownloadPDF = async () => {
    const pdfWidth = 100;
    const pdfHeight = 100;
    const pdf = new jsPDF('p', 'mm', 'a4');
    // const pdf = new jsPDF('p', 'mm', [pdfWidth, pdfHeight]);

    const canvas = await html2canvas(contentRef.current);

    const imgData = canvas.toDataURL('image/png'); 

    pdf.addImage(imgData, 'PNG', 15, 15, 180, 0); 
    // pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight); 

    pdf.save('webpage_content.pdf'); 
  };

  return (
    <div>
      <div ref={contentRef}>
        <Home></Home>
      </div>
      <button className = 'button_plus tooltip' onClick={handleDownloadPDF} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                    `{isShown && <span className='tooltiptext'>{tootTipContent}</span>}`
        </button>
    </div>
  );
};

export default Topdf;