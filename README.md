# canvas-sketches

## Quick Commands

canvas-sketch [name].js --new
canvas-sketch [name].js --output=./pngFiles

canvas-sketch print10.js --output=./pngFiles/[file name]

## ==== Canvas Sizes ====

### Sizes For A4: aspect 5:4 - [600 x 750] || [800 x 1000]

### Sizes for A5: aspect 3.5:2.5 - [500 x 700] || [750 x 1050]

### Sizes for Postcard: aspect 3:2 - [400 x 600] || [600 x 900]

EG:

const settings = {
// Measurements of artwork
dimensions: [ 600, 750],
// Use a higher density for print resolution
// (this defaults to 72, which is good for web)
pixelsPerInch: 300,
// All our units are inches
units: 'in'
}

Preset Paper sizes: https://github.com/mattdesl/canvas-sketch/blob/master/lib/paper-sizes.js
