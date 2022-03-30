const canvas = document.querySelector('#board canvas');
const ctx = canvas.getContext('2d');

ctx.save();
ctx.translate((canvas.width / 2) - (169 / 2), (canvas.height / 2) - (22 * 6 / 2) - 15);
ctx.font = 'bold 70pt monospace';
ctx.fillStyle = 'black';

ctx.fillText('MOM', 0, 70);
ctx.fillText('POP', 0, 128);

ctx.globalCompositeOperation = 'source-atop';
for (let i = 0; i < 6; i++) {
  ctx.fillStyle = `hsl(${ i * (250 / 6) }, 90%, 55%)`;
  ctx.fillRect(0, i * 22, 169, 22);
}

ctx.globalCompositeOperation = 'destination-over';
ctx.fillStyle = '#999';
ctx.fillText('MOM', 3, 72);
ctx.fillText('POP', 3, 130);

ctx.globalCompositeOperation = 'source-over';
ctx.font = '30pt monospace';
'games'.split('').forEach((ch, i) => {
  ctx.fillText(ch, i * 37, 155);
});

ctx.restore();

ctx.globalCompositeOperation = 'destination-over';
ctx.fillStyle = '#555';
for (let i = 0; i< 550; i++) {
  ctx.beginPath();
  ctx.arc(
    Math.random() * canvas.width,
    Math.random() * canvas.height,
    Math.random() * 3,
    0,
    Math.PI * 2,
    false);
  ctx.fill();
}

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);
