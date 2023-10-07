const canvasSketch = require("canvas-sketch");
const random = require("canvas-sketch-util/random");
const settings = {
  dimensions: [1100, 1100],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    // Save the current canvas state
    context.save();

    // Rotate the canvas by 180 degrees
    context.translate(width / 2, height / 2);
    context.rotate(Math.PI); // 180 degrees in radians
    context.translate(-width / 2, -height / 2);

    let radius = 90;

    let centerX = width + radius;
    let centerY = -600;

    const fillColour = [
      "#25262C",
      "#17AD7C",
      "#37A2B7",
      "#DB5094",
      "#08407F",
      "#FCD5A4",
      "#F6A12B",
    ];
    let colourSelector = 0;
    let ticker = 0;
    const drawCircle = (centerX, centerY, radius, colourSelector) => {
      context.fillStyle = fillColour[colourSelector];
      context.beginPath();
      context.arc(centerX, centerY, radius, 0, Math.PI * 2);
      context.fill();
    };

    for (let i = -height; i < height; i += radius) {
      context.save();
      context.translate(0, centerY);
      for (let j = width; j > 0; j--) {
        context.save();
        context.translate(centerX - j * 10, centerY + j * 10);
        drawCircle(0, 0, radius, colourSelector);
        context.restore();
        ticker++;
        if (ticker > 14) {
          const randomColour = random.rangeFloor(0, fillColour.length);
          colourSelector = randomColour;
          ticker = 0;
        }
      }
      centerY += radius * 1.4;
      context.restore();
    }
    context.restore();
  };
};

canvasSketch(sketch, settings);
