const { PDFDocument } = require("pdf-lib");
const fs = require("fs");

async function createPDF(imagePath, outputPDFPath, width, height){

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([width, height]);
}