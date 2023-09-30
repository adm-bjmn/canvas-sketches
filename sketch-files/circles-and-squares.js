const canvasSketch = require("canvas-sketch");
const math = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");
const settings = {
  dimensions: [400, 600],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    let centerX = 0; // Center X-coordinate
    let centerY = 0; // Center Y-coordinate
    const radius = 100;

    // Draw A Peice'a'tha Pizza
    const bottomRight = (context, centerX, centerY, radius) => {
      const startAngle = 0;
      const endAngle = Math.PI / 2;
      // Draw shape
      context.fillStyle = "pink";
      context.beginPath();
      context.moveTo(centerX, centerY); // Move to the start point
      context.arc(centerX, centerY, radius, startAngle, endAngle); // draw the arc
      context.lineTo(centerX, centerY); // connect back to the center point to close the shape
      context.fill();
    };

    const bottomLeft = (context, centerX, centerY, radius) => {
      const startAngle = Math.PI / 2;
      const endAngle = Math.PI;
      // Move point to the top right Corner
      context.translate(radius, 0);
      // Draw shape
      context.fillStyle = "pink";
      context.beginPath();
      context.moveTo(centerX, centerY); // Move to the start point
      context.arc(centerX, centerY, radius, startAngle, endAngle); // draw the arc
      context.lineTo(centerX, centerY); // connect back to the center point to close the shape
      context.fill();
    };

    const topLeft = (context, centerX, centerY, radius) => {
      const startAngle = Math.PI;
      const endAngle = Math.PI * 1.5;
      // Move point to the bottom right Corner
      context.translate(radius, radius);
      // Draw shape
      context.fillStyle = "pink";
      context.beginPath();
      context.moveTo(centerX, centerY); // Move to the start point
      context.arc(centerX, centerY, radius, startAngle, endAngle); // draw the arc
      context.lineTo(centerX, centerY); // connect back to the center point to close the shape
      context.fill();
    };

    const topRight = (context, centerX, centerY, radius) => {
      const startAngle = Math.PI * 1.5;
      const endAngle = 0;
      // Move point to the bottom left Corner
      context.translate(0, radius);
      // Draw shape
      context.fillStyle = "pink";
      context.beginPath();
      context.moveTo(centerX, centerY); // Move to the start point
      context.arc(centerX, centerY, radius, startAngle, endAngle); // draw the arc
      context.lineTo(centerX, centerY); // connect back to the center point to close the shape
      context.fill();
    };

    // Draw a Square
    const drawSquare = (context, centerX, centerY, radius) => {
      context.fillStyle = "pink";
      context.beginPath();
      context.rect(centerX, centerY, radius, radius); // draw the square
      context.fill();
    };

    const options = [
      { name: "topleft", value: topLeft },
      { name: "topRight", value: topRight },
      {
        name: "bottomleft",
        value: bottomLeft,
      },
      {
        name: "bottomRight",
        value: bottomRight,
      },
      {
        name: "square",
        value: drawSquare,
      },
    ];

    for (i = 0; i < height / radius; i++) {
      context.save();
      context.translate(0, radius * i);
      for (j = 0; j < width / radius; j++) {
        context.save();
        context.translate(radius * j, 0);
        const randomIndex = random.rangeFloor(options.length);
        const chosenFunction = options[randomIndex].value;
        chosenFunction(context, centerX, centerY, radius);
        context.restore();
      }
      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
