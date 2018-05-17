'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

function drawSquare(startX: number) {
  ctx.fillStyle = 'purple';
  ctx.fillRect(startX, startX, 20, 20);
  ctx.strokeStyle = 'black';
  ctx.strokeRect(startX, startX, 20, 20);
}

for (let i: number = 0; i < 15; i ++) {
    drawSquare( i * 20 + 20 );
}
