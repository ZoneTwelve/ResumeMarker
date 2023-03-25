#!/usr/bin/env node
const fs = require("fs");
const { createCanvas, loadImage } = require('canvas')

let w = 595, h = 842; // A4 page size
function sign2Canvas( signId ){
  const canvas = createCanvas(w, h, 'pdf')
  const ctx = canvas.getContext('2d')
  ctx.globalAlpha = 0.5;  
  //ctx.addPage()
  // Draw cat with lime helmet
  loadImage(`sign/sign-${signId}.png`).then((image) => {
    ctx.drawImage(image, w-160, 40)
    canvas.toBuffer() // returns a PDF file
    canvas.createPDFStream() // returns a ReadableStream that emits a PDF
    // With optional document metadata (requires Cairo 1.16.0):
    var buf = canvas.toBuffer('application/pdf', {
      title: `sign-${signId}`,
      keywords: 'My sign into pdf',
      creationDate: new Date()
    })
    fs.writeFileSync( `pdf/sign-${signId}.pdf`,  buf);
  })
}

for(let i = 0 ; i < 12 ; i++){
  sign2Canvas( i );
}