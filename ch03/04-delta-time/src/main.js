const canvas = document.querySelector('#board canvas');
const ctx = canvas.getContext('2d');

let dt = 0;
let last = 0;

const speed = 64;
let p1 = 0;
let p2 = 0;

function loopy(ms) {
  requestAnimationFrame(loopy);

  const t = ms / 1000;
  dt = t - last;
  last = t;

  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = '#fff';
  ctx.font = 'bold 30px monospace';
  ctx.strokeText(`Frame length: ${ (dt * 1000).toFixed(2) } ms`, 70, 50);
  ctx.strokeText(`Total time: ${ t.toFixed(2) }`, 70, 90);

  p1 += speed * dt;
  p2 += speed * (1 / 60);
  if (p1 > canvas.width) p1 -= canvas.width + 50;
  if (p2 > canvas.width) p2 -= canvas.width + 50;

  ctx.fillStyle = '#f00';
  ctx.fillRect(p1, 120, 50, 50);
  ctx.fillRect(p2, 190, 50, 50);
}
requestAnimationFrame(loopy);
