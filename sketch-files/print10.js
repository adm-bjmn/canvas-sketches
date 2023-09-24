/**
 * This print 10 sketch draws a diaganoal line
 * on a grid square with direction set by a probability.
 * THe whole sketch is drawn via animate and so the
 * PNG output only contains the first line as subsequent
 * lines are drawn in a HTML element. A copy of the HTML
 * element is created and downloaded inside the function.
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
    let boxSize = 20;
    let prob = 0;

    function drawLine(x1, y1, x2, y2) {
      context.beginPath();
      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
      context.stroke();
    }

    context.strokeStyle = "black";
    context.lineWidth = 2;

    function draw() {
      if (y < height) {
        if (Math.random() > prob) {
          drawLine(x, y, x + boxSize, y + boxSize);
          x += boxSize;
        } else {
          drawLine(x, y + boxSize, x + boxSize, y);
          x += boxSize;
        }

        if (x >= width) {
          y += boxSize;
          x = 0;
          prob += 0.02;
        }
        context.lineWidth = 2;
      }

      if (y >= height) {
        // Create a hidden canvas element
        const hiddenCanvas = document.createElement("canvas");
        hiddenCanvas.width = width;
        hiddenCanvas.height = height;
        const hiddenContext = hiddenCanvas.getContext("2d");

        // Draw your sketch on the hidden canvas
        hiddenContext.drawImage(context.canvas, 0, 0);

        // Export the hidden canvas as an image
        const dataUrl = hiddenCanvas.toDataURL("image/png");

        // Create a download link
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "sketch.png";

        // Trigger the download
        link.click();
      } else {
        requestAnimationFrame(draw);
      }
    }

    draw();
  };
};

canvasSketch(sketch, settings);
