// Import necessary libraries/modules
const canvasSketch = require("canvas-sketch");
const math = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");

// Define the settings for the canvas
const settings = {
  dimensions: [2048, 2048], // Canvas dimensions
};

// Define the sketch function
const sketch = () => {
  // The sketch function returns another function that will be used to draw on the canvas
  return ({ context, width, height }) => {
    // Set the canvas background color to white
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    // Set the fill color for shapes to black
    context.fillStyle = "black";

    // Calculate the center of the canvas
    const cx = width * 0.5;
    const cy = height * 0.5;

    // Define the dimensions of the rectangles to be drawn
    const rectWidth = width * 0.01;
    const rectHeight = height * 0.1;

    let x, y;

    // Define the number of rectangles to draw in a circular layout
    const num = 35;
    // Define the radius of the circular layout
    const radius = width * 0.3;

    // Loop to create the circular layout of rectangles
    for (i = 0; i < num; i++) {
      // Calculate the angle for each rectangle slice
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      // Calculate the x and y coordinates for the current rectangle
      x = radius * Math.sin(angle);
      y = radius * Math.cos(angle);

      // Save the current canvas state
      context.save();
      // Translate the canvas to the center
      context.translate(cx, cy);
      // Translate the canvas to the position of the current rectangle
      context.translate(x, y);
      // Rotate the canvas to match the angle of the rectangle
      context.rotate(-angle);

      // Scale the rectangle randomly
      context.scale(random.range(0.5, 1), random.range(0.5, 1));
      // Draw a rectangle at the current position
      context.beginPath();
      context.rect(-rectWidth * 0.5, -rectHeight * 0.5, rectWidth, rectHeight);
      context.fill();
      // Restore the canvas state to previous
      context.restore();

      // Draw arcs around the rectangles
      context.save();
      context.translate(cx, cy);
      context.rotate(-angle);
      context.lineWidth = 15;
      context.beginPath();
      // Draw an arc around the current rectangle with random properties
      context.arc(
        0,
        0,
        radius * random.range(0.5, 1.3),
        slice * random.range(0.2, 2),
        slice / random.range(0, 1)
      );
      context.stroke();
      // Restore the canvas state to previous
      context.restore();
    }
  };
};

// Call the canvasSketch function with the sketch and settings
canvasSketch(sketch, settings);
