/**
 * This sketch draws quadrelateral shapes on a grid witha  harsh slant on one edge
 * and right angles on three sides.
 * Starting at 00
 *
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
    // Background Detail
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    // Variables
    let x = 0;
    let y = 0;
    let rectWidth = 100;
    let rectHeight = 100;

    // draw Shape
    function drawSquare(x, y, w, h) {
      const deg = Math.PI / 180;
      const rotateBy = [0, 90, 180, 270];
      const randomIndex = Math.floor(Math.random() * rotateBy.length);
      const randomAngle = rotateBy[randomIndex];
      //save the original context translate settings.
      context.save();
      context.translate(x + w / 2, y + h / 2);
      context.rotate(randomAngle * deg);
      context.fillStyle = "black";
      context.beginPath();
      context.moveTo(-rectWidth / 2, -rectHeight / 2);
      context.lineTo(rectWidth / 2, -rectHeight / 2);
      context.lineTo(rectWidth / 2, 0);
      context.lineTo(-rectWidth / 2, rectHeight / 2);
      context.closePath();
      context.fill();

      context.strokeStyle = "white";
      context.rect(-rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight);
      context.stroke();
      context.restore();
    }

    for (let i = 0; i < height; i += rectHeight) {
      y = i;
      for (let j = 0; j < width; j += rectWidth) {
        x = j;
        drawSquare(x, y, rectWidth, rectHeight);
      }
    }
  };
};

canvasSketch(sketch, settings);

// context.save;
// context.translate(width / 2, height / 2);

// Creating
// context.fillStyle = "pink";
// context.beginPath();
// context.fillRect(-rectWidth / 2, -rectHeight / 2, rectHeight, rectWidth);
// context.arc(-rectWidth / 2, -rectHeight / 2, 5, 0, Math.PI * 2);

// context.fillStyle = "black";

// context.fill();
// context.restore();
