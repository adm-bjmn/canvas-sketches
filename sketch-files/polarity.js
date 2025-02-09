const canvasSketch = require("canvas-sketch");
const random = require("canvas-sketch-util/random");

const settings = {
  dimensions: [500, 500], // Canvas size
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    const cols = 4; // Number of columns
    const rows = 6; // Number of rows
    const cellSize = width / cols; // Size of each grid cell

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const centerX = x * cellSize;
        const centerY = y * cellSize;

        // Randomly choose shape
        const shapeType = random.value(); // Generates a number between 0 and 1

        // if (shapeType < 0.35) {
        //   drawHalfSquare(context, centerX, centerY, cellSize);
        // } else

        if (shapeType < 0.8) {
          drawAngledCircle(context, centerX, centerY, cellSize);
        }
        // Otherwise, leave blank (10% probability)
      }
    }
  };
};

// Function to draw a half-red, half-blue square
function drawHalfSquare(context, x, y, size) {
  const flip = random.boolean(); // Randomly flip colors

  // Left half
  context.fillStyle = flip ? "#ff0000" : "#0033ff";
  context.fillRect(x, y, size / 2, size);

  // Right half
  context.fillStyle = flip ? "#0033ff" : "#ff0000";
  context.fillRect(x + size / 2, y, size / 2, size);
}

// Function to draw a full circle with a diagonal split at 23.5 degrees
function drawAngledCircle(context, x, y, size) {
  const flip = random.boolean(); // Randomly flip direction of the diagonal

  const cx = x + size / 2; // Center X
  const cy = y + size / 2; // Center Y
  const radius = size / 2;
  const angle = (23.5 * Math.PI) / 90; // Convert 23.5 degrees to radians

  // Calculate diagonal line points based on flip
  const x1 = flip
    ? cx - Math.cos(angle) * radius
    : cx + Math.cos(angle) * radius;
  const y1 = cy - Math.sin(angle) * radius;
  const x2 = flip
    ? cx + Math.cos(angle) * radius
    : cx - Math.cos(angle) * radius;
  const y2 = cy + Math.sin(angle) * radius;

  // First half of the circle
  context.beginPath();
  context.moveTo(cx, cy);
  context.arc(
    cx,
    cy,
    radius,
    Math.atan2(y1 - cy, x1 - cx),
    Math.atan2(y2 - cy, x2 - cx)
  );
  context.closePath();
  context.fillStyle = "#ff0000"; // Red half
  context.fill();

  // Second half of the circle
  context.beginPath();
  context.moveTo(cx, cy);
  context.arc(
    cx,
    cy,
    radius,
    Math.atan2(y2 - cy, x2 - cx),
    Math.atan2(y1 - cy, x1 - cx)
  );
  context.closePath();
  context.fillStyle = "#0033ff"; // Blue half
  context.fill();
}

canvasSketch(sketch, settings);
