/**
 * This function allows a canvas to be drawn using a loop
 * Once the loop is complete. ie: in this case the precieding
 * "loop" has mad full use of the canvas height, the funcion
 * will download the html element hiddenCanvas.
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

    function draw() {
      /**
       *
       *
       * Code for drawloop goes here. ie:
       * if(y < height)
       * draw blah
       * move
       * repeat.
       */

      // Output logic.
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
