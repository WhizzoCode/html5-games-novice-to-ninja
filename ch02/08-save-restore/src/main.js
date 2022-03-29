const canvas = document.querySelector('#board canvas');
const ctx = canvas.getContext('2d');

function draw() {
  for (let i = 0; i < 100; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    ctx.fillRect(x, y, 50, 50);
  }
}

ctx.fillStyle = 'black';
draw();

ctx.save();
ctx.fillStyle = 'red';
draw();
ctx.restore();

draw();
