////////////////////////////////////  PDF GENERATOR CODE ////////////////////////////////////
import React from 'react';
import jsPDF from 'jspdf';


class PDFGenerator extends React.Component {
  generatePDF = () => {
    const doc = new jsPDF();

    // Add content to the PDF
    // doc.font("Times-Bold")
    doc.setFontSize(22)
    doc.text('MUTHAYAMMAL ENGINEERING COLLEGE',10,25);
    // doc.fontSize(10);
    // doc.font("Times-Roman")
    doc.setFontSize(15)
    doc.text('(An Autonomous Institution)',20,30)
    doc.setFontSize(12)  
    doc.text('(Approved by AICTE, New Delhi, Accredited by NAAC & Affiliated to Anna University)',20,35)
    doc.setFontSize(2)
    doc.setFont('Times-bold') 
    doc.text('Rasipuram - 637 408, Namakkal Dist., Tamil Nadu',20,40)
    doc.rect(10, 60, 50, 10,'F')
    // doc.image("logo2.png",500,20,{
    //   fit: [100, 50], 
    // });
    // Define font size and style
doc.setFontSize(13);
doc.setFont('times', 'bold');

// Draw a rectangle and add text
doc.rect(30, 118, 40, 10);
doc.text('WEBSITE', 45, 78);

// Draw another rectangle and add text
doc.rect(40, 118, 40, 10);
doc.text('NEWS', 50,68);

// Change font style for the following text
doc.setFont('times', 'roman');

// Draw a rectangle and add text
doc.rect(30, 178, 150, 35);
doc.text('Academic year', 40, 190);

// Draw a rectangle and add text (leave the text empty as a placeholder)
doc.rect(180, 178, 380, 35);
doc.text('', 190, 190); // Replace '' with the actual year

// Change font style for the following text
doc.setFont('times', 'bold');

// Draw a rectangle and add text
doc.rect(30, 213, 150, 35);
doc.text('Semester', 40, 225);






      // doc.rect(30,118,80,25).stroke()
      // // doc.font("Times-Bold")
      // doc.text('WEBSITE',45,128);
      // doc.rect(460,118,80,25).stroke()
      // doc.text('NEWS',488,128);
      // doc.fontSize(13)
      // doc.font("Times-Bold")
      // doc.rect(30,178,150,35).stroke()
      // doc.text('Academic year',40,190)
      // doc.font("Times-Roman")
      // doc.rect(180,178,380,35).stroke()
      // doc.text('',190,190) // year
      // doc.font("Times-Bold")
      // doc.rect(30,213,150,35).stroke()
      // doc.text('Semester',40,225)
    // doc.font("Times-Roman")
    // doc.rect(180,213,380,35).stroke()
    // doc.text('',190,225)//odd or even
    // doc.font("Times-Bold")
    // doc.rect(30,248,150,35).stroke()
    // doc.text('Nature of the Event',40,260)
    // doc.font("Times-Roman")
    // doc.rect(180,248,380,35).stroke()
    // doc.text('',190,260)//Nature of the Event
    // doc.font("Times-Bold")
    // doc.rect(30,283,150,35).stroke()
    // doc.text('Name of the Event',40,295)
    // doc.font("Times-Roman")
    // doc.rect(180,283,380,35).stroke()
    // doc.text('',190,295)//Name of the Event
    // doc.font("Times-Bold")
    // doc.rect(30,318,150,35).stroke()
    // doc.text('Date of the Event',40,330)
    // doc.font("Times-Roman")
    // doc.rect(180,318,380,35).stroke()
    // doc.text('',190,330) //date
    // doc.rect(30,353,150,35)
    // doc.font("Times-Bold")
    // doc.text('Organized by',40,365)
    // doc.font("Times-Roman")
    // doc.rect(180,353,380,35).stroke()
    // doc.text('Department of ',190,365) //dept full name
    // doc.font("Times-Bold")
    // doc.rect(30,388,150,225).stroke()
    // doc.text('Write Up',40,485)
    // doc.font("Times-Roman")
    // doc.rect(180,388,380,225).stroke()
    // doc.text('Student TechTalk on was conducted by the Department of  on . The Resource Person of the event was , Muthayammal Engineering College.  delivered and the students are actively participated in the Student TechTalk',190,415)
    // doc.font("Times-Bold")
    // doc.text('HOD',420,704)


// doc.end()

    // Generate a data URI for the PDF
    const pdfDataUri = doc.output('datauristring');

    // Open the PDF in a new tab or window
    const newWindow = window.open();
    newWindow.document.write(`<iframe width='100%' height='100%' src='${pdfDataUri}'></iframe>`);
  };

  render() {
    return (
      <div>
        <button onClick={this.generatePDF}>View PDF</button>
      </div>
    );
  }
}
export default PDFGenerator;