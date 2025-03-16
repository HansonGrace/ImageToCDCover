const sharp = require("sharp");

async function resizeImage(inputPath, outputPath, width, height){
    await sharp(inputPath)
        .resize(width, height, { fit: "cover"})
        .toFile(outputPath);

}
module.exports = { resizeImage };