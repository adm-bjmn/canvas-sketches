const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [2048, 2048],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    let centerX = width;
    let centerY = 0;
    let radius = 100;
    const fillColour = [
      "#25262C",
      "#17AD7C",
      "#37A2B7",
      "#DB5094",
      "#08407F",
      "#FCD5A4",
      "#F6A12B",
    ];

    const drawCircle = (centerX, centerY, radius) => {
      context.fillStyle = fillColour[6];
      context.beginPath();
      context.arc(centerX, centerY, radius, 0, Math.PI * 2);
      context.fill();
    };

    for (let i = width; i > 0; i--) {
      drawCircle(centerX, centerY, radius);
      centerX -= 10;
      centerY += 10;
    }
  };
};

canvasSketch(sketch, settings);
