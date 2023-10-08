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

    let radius = 80;
    //let centerX = width + radius;
    //let centerY = -600;
    let colourSelector = 0;
    let ticker = 0;
    let plotCount = 0;
    let plotLimit;
    let changed = 0;
    let centerY = 0;
    let centerX = 0;
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

    // change this ti centerX = width *0.5 to width*0.7
    plotLimit = random.rangeFloor(1020, 1045);
    for (let j = height; j > 0; j--) {
      context.save();
      context.translate(centerX + j * 10, height - j * 10);
      drawCircle(0, 0, radius, colourSelector);
      context.restore();
      ticker++;
      plotCount++;
      if (plotCount < plotLimit) {
        colourSelector = 0;
      } else {
        if (changed < 3) {
          if (ticker > 5 && random.value() > 0.8) {
            console.log(changed);
            const randomColour = random.rangeFloor(1, fillColour.length);
            colourSelector = randomColour;
            ticker = 0;
            changed++;
            console.log(changed);
          }
        }
      }
    }

    // for (let i = -height; i < height; i += radius) {
    //   plotCount = 0;
    //   context.save();
    //   context.translate(0, centerY);
    //   for (let j = width; j > 0; j--) {
    //     context.save();
    //     context.translate(centerX - j * 10, centerY + j * 10);
    //     drawCircle(0, 0, radius, colourSelector);
    //     context.restore();
    //     ticker++;
    //     plotCount++;
    //     if (plotCount < 1010) {
    //       colourSelector = 0;
    //     } else {
    //       if (ticker > 20) {
    //         const randomColour = random.rangeFloor(1, fillColour.length);
    //         colourSelector = randomColour;
    //         ticker = 0;
    //       }
    //     }
    //   }
    //   centerY += radius * 1.4;
    //   context.restore();
    // }
    //context.restore();
  };
};

canvasSketch(sketch, settings);