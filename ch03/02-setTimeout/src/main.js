const canvas = document.querySelector('#board canvas');
const ctx = canvas.getContext('2d');

ctx.strokeStyle = '#fff';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.font = 'bold 70px monospace';

const start = Date.now();
function loopy() {
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeText(Date.now() - start, canvas.width / 2, canvas.height / 3);

  if (Math.random() < 0.01) {
    ctx.strokeText('Game Over!', canvas.width / 2, canvas.height / 3 * 2);
  } else {
    setTimeout(loopy, 1000 / 60);
  }
}
loopy();
