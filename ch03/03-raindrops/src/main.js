const canvas = document.querySelector('#board canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#000';
ctx.globalAlpha = 0.02;

function loopy(t) {
  requestAnimationFrame(loopy);

  ctx.restore();
  ctx.save();
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#fff';
  ctx.globalAlpha = 1;
  ctx.beginPath();
  ctx.arc(
    Math.random() * canvas.width,
    Math.random() * canvas.height,
    Math.random() * 20,
    0,
    Math.PI * 2
  );
  ctx.fill();
}
requestAnimationFrame(loopy);
