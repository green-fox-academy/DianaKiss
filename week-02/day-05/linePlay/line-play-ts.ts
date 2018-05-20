'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let cWidth: number = canvas.width;
let cHeight: number = canvas.height;

let x: number = 0;
let wX: number = 0;

function Glinedraw(X) {
  ctx.beginPath();
  ctx.strokeStyle = 'green';
  ctx.moveTo(wX, wX + x);
  ctx.lineTo(wX + x, wX + cHeight);
  ctx.stroke();
}

function Plinedraw(X) {
  ctx.beginPath();
  ctx.strokeStyle = 'purple';
  ctx.moveTo(cWidth - x , wX );
  ctx.lineTo(cWidth, cHeight - x);
  ctx.stroke();
}

for (let i: number = 0; i < 20; i ++) {
  x = x + 20;
  Glinedraw(wX);
  Plinedraw(wX);
}
