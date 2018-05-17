
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.

let color: string [] = ['yellow', 'green', 'brown', 'red', ]; 

for (let i: number = 0; i < 4; i ++) {
  ctx.fillStyle = color[i];
  ctx.fillRect(i * 100 + 5, i * 10 + 5, i * 20 + 10 , i * 5 + 50);
}
