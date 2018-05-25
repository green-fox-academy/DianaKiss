'use strict';


const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// circles in circles in circles in circles

let cWidth: number = canvas.width;
let cHeight: number = canvas.height;
let radC: number = cHeight / 2;

function drawCircle(centX, centY, radVar, count) {
  if (count !== 0) {
    let X: number = centX;
    let Y: number = centY;
    ctx.beginPath();
    ctx.arc(X, Y, radVar, 0, Math.PI * 2);
    ctx.strokeStyle = `hsl(${count * 50}, 100%, 50%)`;
    ctx.stroke();
    ctx.arc(X, Y, radVar, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${Math.random() * 50}, 100%, 50%, 0.3)`;
    ctx.fill();
    

    setTimeout(function () {drawCircle(X, Y - radVar / 2, radVar / 2, count - 1);
    drawCircle(X - Math.cos(0.523599) * radVar / 2, Y + Math.sin(0.523599) * radVar / 2, radVar / 2, count - 1);
    drawCircle(X + Math.cos(0.523599) * radVar / 2, Y + Math.sin(0.523599) * radVar / 2, radVar / 2, count - 1);
    }, 1000);
  }
}

drawCircle(cWidth / 2, cHeight / 2, radC, 6);
