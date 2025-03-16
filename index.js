/* CD COVER DIMENSIONS
*  front cover: 4.724 x 4.724 (~120x120xmm)
*  spine width: ~5.984mm
*
*  For PDF conversion: 340x340 points
*/

//declare dependencies 
//express for GUI
const express = require("express");
const multer = require("multer");
//sharp for image processing
const sharp = require("sharp");
//generates PDF
const { PDFDocument, rgb} = require("pdf-lib");
const fs = require("fs");

const app = express();
const upload = multer({ dest: "uploads/"});

//declare variables for CD cover dimensions in points for PDF
const PDF_WIDTH = 340;  //4.724 inches * 72 DPI
const PDF_HEIGHT = 340; //4.724 inches * 72 DPI