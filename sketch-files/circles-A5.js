const canvasSketch = require("canvas-sketch");
const math = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");
const settings = {
  dimensions: [500, 700],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    let centerX = 0; // Center X-coordinate
    let centerY = 0; // Center Y-coordinate
    const radius = 50; // sets size of grid square and radius of 1/4 circles
    const colorChoice = "black";

    // Draw A Peice'a'tha Pizza
    const bottomRight = (context, centerX, centerY, radius) => {
      const startAngle = 0;
      const endAngle = Math.PI / 2;
      // Draw shape
      context.fillStyle = colorChoice;
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
      context.fillStyle = colorChoice;
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
      context.fillStyle = colorChoice;
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
      context.fillStyle = colorChoice;
      context.beginPath();
      context.moveTo(centerX, centerY); // Move to the start point
      context.arc(centerX, centerY, radius, startAngle, endAngle); // draw the arc
      context.lineTo(centerX, centerY); // connect back to the center point to close the shape
      context.fill();
    };

    // Draw a Square
    const drawSquare = (context, centerX, centerY, radius) => {
      context.fillStyle = colorChoice;
      context.beginPath();
      context.rect(centerX, centerY, radius, radius); // draw the square
      context.fill();
    };

    // Draw Triangle left to right
    const drawTLR = (context, centerX, centerY, radius) => {
      context.fillStyle = colorChoice;
      context.beginPath();
      context.moveTo(centerX + radius, centerY);
      context.lineTo(centerX, centerY + radius);
      context.lineTo(centerX + radius, centerY + radius);
      context.closePath();
      context.fill();
    };

    // Draw Triangle right ot left
    const drawTRL = (context, centerX, centerY, radius) => {
      context.fillStyle = colorChoice;
      context.beginPath();
      context.moveTo(centerX, centerY);
      context.lineTo(centerX + radius, centerY + radius);
      context.lineTo(centerX, centerY + radius);
      context.closePath();
      context.fill();
    };

    const drawTRLU = (context, centerX, centerY, radius) => {
      context.fillStyle = colorChoice;
      context.beginPath();
      context.moveTo(centerX + radius, centerY);
      context.lineTo(centerX + radius, centerY + radius);
      context.lineTo(centerX, centerY);
      context.closePath();
      context.fill();
    };
    const drawTLRU = (context, centerX, centerY, radius) => {
      context.fillStyle = colorChoice;
      context.beginPath();
      context.moveTo(centerX, centerY);
      context.lineTo(centerX + radius, centerY);
      context.lineTo(centerX, centerY + radius);
      context.closePath();
      context.fill();
    };

    const drawCircle = (context, centerX, centerY, radius) => {
      const startAngle = 0;
      const endAngle = Math.PI * 2;
      // Draw shape
      context.fillStyle = colorChoice;
      context.beginPath();
      context.arc(
        centerX + radius / 2,
        centerY + radius / 2,
        radius / 2,
        startAngle,
        endAngle
      ); // draw the arc
      context.fill();
    };

    const edgeOptions = [
      [
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
      ],
      [
        {
          name: "square",
          value: drawSquare,
        },
        {
          name: "Triangle left to right",
          value: drawTLR,
        },
        {
          name: "Triangle right to left",
          value: drawTRL,
        },
        {
          name: "Triangle right to left upper",
          value: drawTRLU,
        },
        {
          name: "Triangle left to right upper",
          value: drawTLRU,
        },
        {
          name: "full",
          value: drawCircle,
        },
      ],
    ];

    for (i = 0; i < height / radius; i++) {
      context.save();
      context.translate(0, radius * i);
      for (j = 0; j < width / radius; j++) {
        context.save();
        context.translate(radius * j, 0);
        let optionSet;
        if (random.value() > 0.7) {
          optionSet = edgeOptions[1];
        } else {
          optionSet = edgeOptions[0];
        }
        const randomIndex = random.rangeFloor(optionSet.length);
        const chosenFunction = optionSet[randomIndex].value;
        chosenFunction(context, centerX, centerY, radius);
        context.restore();
      }
      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
