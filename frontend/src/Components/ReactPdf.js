import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import Home from './Home';

const WebpageToPDF = () => {
  const downloadPDF = () => {
    const element = document.getElementById('pdf-content');
    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('webpage.pdf');
    });
  };

  return (
    <div>
      <h1>Webpage to PDF Downloader</h1>
      <div id="pdf-content">
        <Home></Home>
      </div>
      <button onClick={downloadPDF}>Download as PDF</button>
    </div>
  );
};

export default WebpageToPDF;
