# canvas-sketches

## Quick Start Commands

Initialise new sketch
`canvas-sketch sketch-files/[name].js --new --open`

Configure .png output
`canvas-sketch sketch-files/[name].js --output=./pngFiles/[file name]/ `

## Canvas Sizes

```
const settings = {
  // Measurements of artwork
  dimensions: [ 210, 297 ], // or use a string value for example "A4"

  // Use a higher density for print resolution
  pixelsPerInch: 300,

  // All units are inches
  units: 'in'
}
```

Useful photo sizes:

[ '5r', 127, 178 ], // 5″x7″
[ '6r', 152, 203 ], // 6″x8″
[ '8r', 203, 254 ], // 8″x10″
[ '10r', 254, 305 ], // 10″x12″
[ '11r', 279, 356 ], // 11″x14″

## lino sizes

A5(ish) 6" x 8"
A4(ish) 10" x 12"

Useful Link: [Preset Paper sizes](https://github.com/mattdesl/canvas-sketch/blob/master/lib/paper-sizes.js)

## Cmmmit Messages

```
develop(sketch.js): draw a square
^-----^^----------^^------------^
|      |           |
|      |           +---> Summary in present tense.
|      +---------------> Sketch name
+----------------------> Type: new, develop, fix, style, refactor, chore, stop, printing
```

Examples:

- `new`: (new sketch initiated)
- `develop(sketch-name)`: (continous development of concept)
- `fix(sketch-name)`: (fixing issues in existing code - No new code)
- `style(sketch-name)`: (formatting, missing semi colons, etc; no production code change)
- `refactor(sketch-name)`: (refactoring production code, eg. renaming a variable)
- `chore(sketch-name)`: (updating grunt tasks etc; no production code change)
- `stop(sketch-name)`: (A good place to stop and admire, move on from draft or call an idea done)
- `printing`: (Only variables have changed to get outputs for lino - no code change)
