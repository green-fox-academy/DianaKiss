'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.




function goToCenter(startX: number, startY: number) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(300, 200);
  ctx.strokeStyle = '#9944AA';
  ctx.stroke();
}


for (let i: number = 0; i < 300; i += 100) {
  goToCenter(i, 10);
}
