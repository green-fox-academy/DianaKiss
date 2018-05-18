'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let cWidth: number = canvas.width;
let cHeight: number = canvas.height;

let x: number = 0;
let wX: number = 0;
let wY: number = 0;

function Glinedraw(X, Y) {
  ctx.beginPath();
  ctx.strokeStyle = 'green';
  ctx.moveTo(wX, wY + x);
  ctx.lineTo(wX + x, wY + cHeight);
  ctx.stroke();
}

function Plinedraw(X, Y) {
  ctx.beginPath();
  ctx.strokeStyle = 'purple';
  ctx.moveTo(cWidth - x , wY );
  ctx.lineTo(cWidth, cHeight - x);
  ctx.stroke();
}

Plinedraw(0,0);


for (let i: number = 0; i < 20; i ++) {
  x = x + 20;
  Glinedraw(wX, wY);
  Plinedraw(wX, wY)
}

