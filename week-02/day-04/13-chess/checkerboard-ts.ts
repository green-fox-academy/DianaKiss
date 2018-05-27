'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.

function drawSquare(startX: number, startY: number, size: number, ) {
  ctx.fillRect(startX, startY, size, size);
}

for (let i: number = 0; i < 9; i ++) {
  for (let j: number = 0; j < 9; j ++) {
    ctx.fillStyle = `hsl(${Math.random() * 255}, 100%, 50%)`;
    drawSquare(i * 100, j  * 100, 50);
    ctx.fillStyle = `hsl(${Math.random() * 100}, 100%, 50%)`;
    drawSquare(i * 100 + 50, j  * 100 + 50, 50);
  }
}
