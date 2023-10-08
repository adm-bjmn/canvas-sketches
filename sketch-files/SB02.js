const canvasSketch = require("canvas-sketch");
const random = require("canvas-sketch-util/random");

const settings = {
  dimensions: "6r",
  pixelsPerInch: 300,
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    // Save the current canvas state
    context.save();

    // Rotate the canvas by 180 degrees
    // context.translate(width / 2, height / 2);
    // context.rotate(Math.PI); // 180 degrees in radians
    // context.translate(-width / 2, -height / 2);

    let radius = 150;
    //let centerX = width + radius;
    //let centerY = -600;
    let colourSelector = 0;
    let ticker = 0;
    let plotCount = 0;
    let plotLimit;
    let changed = 0;
    let gap = 137.5;
    let centerY = height;
    let centerX = -width * 0.1;
    const fillColour = [
      "#25262C",
      "#17AD7C",
      "#37A2B7",
      "#DB5094",
      "#08407F",
      "#FCD5A4",
      "#F6A12B",
    ];

    const drawCircle = (centerX, centerY, radius, colourSelector) => {
      context.fillStyle = fillColour[colourSelector];
      context.beginPath();
      context.arc(centerX, centerY, radius, 0, Math.PI * 2);
      context.fill();
    };

    plotLimit = 250;
    for (let i = -15; i < 15; i++) {
      console.log(i);
      context.save();
      context.translate(centerX + i * radius, 0);
      for (let j = height; j > -radius; j--) {
        context.save();
        context.translate(centerX + j, centerY - j);
        drawCircle(0, 0, radius, colourSelector);
        ticker++;
        plotCount++;
        if (
          plotCount >= plotLimit &&
          changed < 3 &&
          ticker > random.rangeFloor(100, 500) &&
          random.value() > 0.8
        ) {
          const randomColour = random.rangeFloor(1, fillColour.length);
          colourSelector = randomColour;
          ticker = 0;
          changed++;
        }
        context.restore();
      }
      changed = 0;
      plotCount = 0;
      plotLimit += plotLimit * 0.1;
      colourSelector = 0;
      centerX += gap;
      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
