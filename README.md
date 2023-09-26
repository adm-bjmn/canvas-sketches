# canvas-sketches

## Quick Start Commands

Initialise new sketch
`canvas-sketch [name].js --new`



Configure .png output
`canvas-sketch [name].js --output=./pngFiles/[file name]/ `

## Canvas Sizes

Sizes For A4: aspect 5:4 - [600 x 750] || [800 x 1000]

Sizes for A5: aspect 3.5:2.5 - [500 x 700] || [750 x 1050]

Sizes for Postcard: aspect 3:2 - [400 x 600] || [600 x 900]

EG:

```
const settings = {
  // Measurements of artwork
  dimensions: [ 600, 750],
  // Use a higher density for print resolution
  // (this defaults to 72, which is good for web)
  pixelsPerInch: 300,
  // All our units are inches
  units: 'in'
}
```

Useful Link: [Preset Paper sizes](https://github.com/mattdesl/canvas-sketch/blob/master/lib/paper-sizes.js)


## Cmmmit Messages

```
develop(sketch.js): draw a square
^-----^^----------^^------------^
|      |           |
|      |           +---> Summary in present tense.
|      +---------------> Sketch name
+----------------------> Type: new, develop, fix, style, refactor, chore
```

Examples:

- `new`: (new sketch initiated)
- `develop(sketch-name)`: (continous development of concept)
- `fix(sketch-name)`: (fixing issues in existing code - No new code)
- `style(sketch-name)`: (formatting, missing semi colons, etc; no production code change)
- `refactor(sketch-name)`: (refactoring production code, eg. renaming a variable)
- `chore(sketch-name)`: (updating grunt tasks etc; no production code change)
