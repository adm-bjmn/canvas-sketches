/**
 * This is a sketch for a prospective design
 * Idea for Starbots creative using a generative art
 * concept to adapt a feature design prop
 * with the inroduction of a little chaos
 *
 * Adm.Bjmn
 * 01/10/2023
 *
 * */

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

    let drawWidth = width;
    let centerX = 0; // Center X-coordinate
    let centerY = 0; // Center Y-coordinate
    const radius = 50;
    const options = ["aliceblue", "springgreen", "darkmagenta", "deeppink"];

    const botsSegment = (context, centerX, centerY, radius) => {
      const startAngle = Math.PI * 1;
      const endAngle = Math.PI * 0.5;
      //context.translate(0, radius);
      const randomIndex = random.rangeFloor(options.length);
      const chosenColour = options[randomIndex];
      console.log(chosenColour);
      if (random.chance((probability = 0.5))) {
        context.fillStyle = "darkcyan";
      } else {
        context.fillStyle = chosenColour;
      }
      context.beginPath();
      context.lineTo(centerX, centerY, centerX, centerY - radius * 0.5); // Move to the start point
      context.arc(
        centerX + radius * 0.5,
        centerY - radius * 0.5,
        radius / 2,
        startAngle,
        endAngle
      ); // draw the arc
      context.lineTo(centerX, centerY); // connect back to the center point to close the shape
      // context.stroke();
      context.fill();
    };

    // testing shape
    context.save();
    context.translate(width * 0.5, height * 0.5);
    botsSegment(context, centerX, centerY, radius);
    context.restore();

    // for (i = 0; i < height / radius + 1; i += 0.3) {
    //   context.save();
    //   context.translate(0, radius * i);
    //   for (j = 0; j < drawWidth / radius; j++) {
    //     context.save();
    //     context.translate(radius * j, 0);
    //     botsSegment(context, centerX, centerY, radius);
    //     context.restore();
    //   }
    //   context.restore();
    //   centerX -= 10;
    //   drawWidth += 10;
    // }
  };
};

canvasSketch(sketch, settings);
