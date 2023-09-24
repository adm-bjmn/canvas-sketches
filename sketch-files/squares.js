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
    let rectWidth = 50;
    let rectHeight = 50;
    let prob = 0.1;
    let drawCount = 0;
    // draw a square
    function drawSquare(x, y, w, h) {
      //save the original context translate settings.
      context.save();
      /**
       * Shift the context of the canvas.
       * Imagine holding the Pen still and
       * moving the paper as an
       * alternative to moving the Pen
       */
      context.translate(x, y);
      context.fillStyle = "pink";
      context.beginPath();
      // To draw square from the center use:
      //context.rect(-w * 0.5, -h * 0.5, w, h);
      context.rect(0, 0, w, h);
      context.fill();
      /**
       * Restore the context to ensure future objects
       * are drawn in relation to 00 and not the
       * context position used for this particular
       * object
       */
      context.restore();
    }

    for (let i = 0; i < height; i += rectHeight) {
      y = i;
      for (let j = 0; j < width; j += rectWidth) {
        x = j;
        if (Math.random() < prob) {
          console.log("draw");
          drawSquare(x, y, rectWidth, rectHeight);
          drawCount++;
        } else {
          console.log("dont Draw");
        }
        if (x == width - rectWidth) {
          /**
           * with each pass of the x axis
           * increase the probability of
           * drawing a square by almost 10%
           */
          prob += 0.08;
          console.log(prob);
        }
      }
    }

    console.log(
      "Total squares in the grid:",
      (width / rectWidth) * (height / rectHeight)
    );
    console.log("Drawn squares:", drawCount);
  };
};

canvasSketch(sketch, settings);
