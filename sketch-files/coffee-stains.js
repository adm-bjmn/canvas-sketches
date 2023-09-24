const canvasSketch = require("canvas-sketch");
const math = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");

const settings = {
  dimensions: [2048, 2048],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    context.fillStyle = "black";

    const cx = width * 0.5;
    const cy = height * 0.5;
    const rectWidth = width * 0.01;
    const rectHeight = height * 0.1;
    let x, y;

    const num = 12;
    const radius = width * 0.3;

    for (i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      x = radius * Math.sin(angle);
      y = radius * Math.cos(angle);

      context.save();
      // translate to the middle
      context.translate(cx, cy);
      // translate to the new x,y point for this line
      context.translate(x, y);
      context.rotate(-angle);

      context.scale(random.range(1, 3), random.range(1, 3));
      context.beginPath();
      context.rect(-rectWidth * 0.5, -rectHeight * 0.5, rectWidth, rectHeight);
      context.fill();
      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
