'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

let k: number = 0;

function drawSquare(startX: number, size: number) {
  ctx.fillStyle = 'purple';
  ctx.fillRect(startX, startX, size, size);
  ctx.strokeStyle = 'black';
  ctx.strokeRect(startX, startX, size, size);
}

for (let i: number = 0; i < 9; i++) {
    k = k + (i - 1) * 10;
    drawSquare( k , i * 10);
}
