const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [2048, 2048],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    let centerX = 0;
    let centerY = 0;
    const radius = 100;

    // Quadrants
    const bottomRight = {
      startAngle: 0,
      endAngle: Math.PI / 2,
    };

    const bottomLeft = {
      startAngle: Math.PI / 2,
      endAngle: Math.PI,
    };

    const topRight = {
      startAngle: Math.PI * 1.5,
      endAngle: 0,
    };

    const topLeft = {
      startAngle: Math.PI,
      endAngle: Math.PI * 1.5,
    };

    // Draw A Peice'a'tha Pizza
    context.fillStyle = "pink";
    context.beginPath();
    context.moveTo(centerX, centerY); // Move to the start point
    context.arc(
      centerX,
      centerY,
      radius,
      bottomRight.startAngle,
      bottomRight.endAngle
    ); // draw the arc
    context.lineTo(centerX, centerY); // connect back to the center point to close the shape
    context.fill();
  };
};

canvasSketch(sketch, settings);
