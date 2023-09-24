let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

// Basic Rectangle
context.fillStyle = "blue";
context.fillRect(50, 50, 200, 200);

// Basic Rect Outline & fill
context.lineWidth = 4;
context.beginPath();
// positon x, position y, width, height (down)
context.rect(300, 50, 200, 200);
context.fillStyle = "red";
context.fill();
context.stroke();

// basic arc ( circle )
context.beginPath();
// position x, postion y, radius, stating angle, finishing angle
context.arc(150, 450, 50, 0, Math.PI * 2);
context.stroke();
