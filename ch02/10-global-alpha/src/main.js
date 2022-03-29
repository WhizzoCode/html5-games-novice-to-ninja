const canvas = document.querySelector('#board canvas');
const ctx = canvas.getContext('2d');

function draw() {
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.arc(
      Math.random() * canvas.width,
      Math.random() * canvas.height,
      Math.random() * 50,
      0,
      Math.PI * 2,
      true
    );
    ctx.fill();
  }
}

ctx.save();
ctx.globalAlpha = 0.3;
ctx.fillStyle = 'blue';
draw();
ctx.fillStyle = 'orange';
draw();
ctx.fillStyle = 'green';
draw();
ctx.restore();
ctx.fillStyle = 'lemonchiffon';
draw();
