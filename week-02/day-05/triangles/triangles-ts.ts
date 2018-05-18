'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let cWidth: number = canvas.width;
let x: number = 20; // half of triangle side

let coord: number = cWidth / 2;
let coordY: number = 0;


function triangleDraw(startX: number, startY: number) {
  ctx.beginPath();
  ctx.moveTo(coord , coordY);
  ctx.lineTo(coord - x, coordY + x * Math.sqrt(3));
  ctx.lineTo(coord + x, coordY + x * Math.sqrt(3));
  ctx.lineTo(coord , coordY);
  ctx.strokeStyle = 'green'
  ctx.stroke();
}


for (let i: number = 0; i < 12; i ++) {
  for (let i: number = 0; i < 12; i ++) {
    coord = coord - x;
    coordY = coordY + x * Math.sqrt(3);
    triangleDraw(coord, coordY);
  }
  coord = cWidth / 2 + x * i;
  coordY = x * Math.sqrt(3) * i;
  triangleDraw(coord, coordY);
}


