import {React, useState, useEffect} from 'react';
import './MainContent.css';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.png';

const MainContent = () => {

  const[toolTipImage1, settoolTipImage1] = useState();
  const[toolTipImage2, settoolTipImage2] = useState();
  const[toolTipImage3, settoolTipImage3] = useState();
  const[toolTipImage1Pos, settoolTipImage1Pos] = useState('');
  const[toolTipImage2Pos, settoolTipImage2Pos] = useState('');
  const[toolTipImage3Pos, settoolTipImage3Pos] = useState('');
  console.log(toolTipImage1Pos);

  useEffect(() => {
    fetchToolKitImage1();
    fetchToolKitImage2();
    fetchToolKitImage3();
},[]
)

const fetchToolKitImage1 = async () => {
    try{
        const resData = await fetch('http://localhost:5000/api/tooltip/image1');
        const message = await resData.json();
        settoolTipImage1(message.data.mess);
        settoolTipImage1Pos(message.data.pos);
    }
    catch(error){
        console.log('Can not load message', error);
    }
}

const fetchToolKitImage2 = async () => {
  try{
      const resData = await fetch('http://localhost:5000/api/tooltip/image2');
      const message = await resData.json();
      settoolTipImage2(message.data.mess);
      settoolTipImage2Pos(message.data.pos);
  }
  catch(error){
      console.log('Can not load message', error);
  }
}

const fetchToolKitImage3 = async () => {
  try{
      const resData = await fetch('http://localhost:5000/api/tooltip/image3');
      const message = await resData.json();
      settoolTipImage3(message.data.mess);
      settoolTipImage3Pos(message.data.pos);
  }
  catch(error){
      console.log('Can not load message', error);
  }
}

// const imagePos = `message ${toolTipImage1Pos.toLowerCase()}`;
// const imageClass = toolTipImage1Pos.toLowerCase();

  return (
    <div className="main-content">
      <h2>Main Content</h2>
      <p>
        This is the main content of the page. You can add any text, images, or other elements here.
        For this example, let's add a list of features:
      </p>
      <ul>
        <li>Feature 1: {toolTipImage1}</li>
        <li>Feature 2: Consectetur adipiscing elit.</li>
        <li>Feature 3: Integer molestie sapien a justo ullamcorper.</li>
        <li>Feature 4: Sed sit amet lectus vel diam aliquam eleifend.</li>
      </ul>
      <div className='img-container'>
        <div className = 'container'>
        <img src = {img1} alt = "img1"/>
        <div class = {`middle ${toolTipImage1Pos}`}>
          <div className={`text`}>{toolTipImage1}</div>
        </div>
        </div> 
        <div className='container'>
        <img src = {img2} alt = "img2" className='container'/>
        <div className = {`middle ${toolTipImage2Pos}`}>
          <div className="text">{toolTipImage2}</div>
        </div>
        </div>
        <div className='container'>
        <img src = {img3} alt = "img3" className='container'/>
        <div className = {`middle ${toolTipImage3Pos}`}>
          <div className ="text">{toolTipImage3}</div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
