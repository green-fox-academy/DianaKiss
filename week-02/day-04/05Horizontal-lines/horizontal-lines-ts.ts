'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// draw 3 lines with that function. Use loop for that.



function horizontal(startX: number, startY: number) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(startX + 50 , startY);
  ctx.strokeStyle = '#FF11AA';
  ctx.stroke();
}


for (let i: number = 10; i < 310; i += 100) {
  horizontal(i, i);
}
