/**
 * This print 10 sketch draws a diaganoal line
 * on a grid square with direction set by a probability.
 * Starting at 00 the porbabvlity the line is
 * drawn from right to left is 0.
 * With each new line the probablity the line
 * goes from right to left is increased until toward the
 * end of the drawing (y == height) the probablity it 100%
 * THe whole sketch is drawn using translate as apose
 * to the first itteration which was drawn using animate.
 *
 * Adam Benjamin
 * Adm.bjmn
 *
 */

const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [400, 600],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    let x = 0;
    let y = 0;
    let boxSize = 50;
    let leftCount = 0;
    let rightCount = 0;
    let prob = 0.5;

    function drawLine(x, y, x2, y2) {
      context.strokeStyle = "black";
      context.lineWidth = 6;
      context.beginPath();
      context.moveTo(x, y);
      context.lineTo(x2, y2);
      context.stroke();
    }

    for (let i = 0; i < height; i += boxSize / 2) {
      y = i;
      console.log(y);
      for (let j = 0; j < width; j += boxSize / 2) {
        x = j;
        context.save();
        context.translate(x, y);
        if (Math.random() > prob) {
          drawLine(x + boxSize, y, x, y + boxSize);
          context.restore();
          leftCount++;
        } else {
          drawLine(x, y, x + boxSize, y + boxSize);
          context.restore();
          rightCount++;
        }
        if (x == width - boxSize) {
          /**
           * with each pass of the x axis
           * increase the probability of
           * drawing a square by almost 10%
           */
          // prob += 0.02;
        }
      }
    }
  };
};

canvasSketch(sketch, settings);
