const { PDFDocument } = require("pdf-lib");
const fs = require("fs");
const { create } = require("domain");

async function createPDF(imagePath, outputPDFPath, width, height){

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([width, height]);

    const imageBytes = fs.readFileSync(imagePath); 
    const image = await pdfDoc.embedPng(imageBytes);
    page.drawImage(image, {x: 0, y: 0, width, height});

    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync(outputPDFPath, pdfBytes);
}

module.exports = { createPDF };