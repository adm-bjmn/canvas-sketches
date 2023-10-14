/**
 * This sketch has been canned due to the limitations of node when
 * messing with tensorflow.
 *
 * Im going to move this idea to a react app.
 *
 */

const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [2048, 2048],
};
const image = new Image();
image.src = "/local/images/pearl.jpeg";

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    image.onload = () => {
      context.drawImage(image, 100, 100, image.width, image.height);
    };
  };
};

canvasSketch(sketch, settings);
