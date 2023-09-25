const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [2048, 2048],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    let centerX = 0; // Center X-coordinate
    let centerY = 0; // Center Y-coordinate
    const radius = 100;

    // Quadrants
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
      context.translate(100, 0);
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
      context.translate(100, 100);
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
      context.translate(0, 100);
      // Draw shape
      context.fillStyle = "pink";
      context.beginPath();
      context.moveTo(centerX, centerY); // Move to the start point
      context.arc(centerX, centerY, radius, startAngle, endAngle); // draw the arc
      context.lineTo(centerX, centerY); // connect back to the center point to close the shape
      context.fill();
    };

    // Draw A Peice'a'tha Pizza

    // topLeft(context, centerX, centerY, radius);
    // topRight(context, centerX, centerY, radius);
    // bottomRight(context, centerX, centerY, radius);
    // bottomLeft(context, centerX, centerY, radius);
  };
};

canvasSketch(sketch, settings);
