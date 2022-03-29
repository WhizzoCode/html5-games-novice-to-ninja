const canvas = document.querySelector('#board canvas');
const ctx = canvas.getContext('2d');
const { width: w, height: h } = canvas;

ctx.font = '20pt courier';
ctx.textAlign = 'center';

const center = w / 2;
for (let i = 0; i < 11; i++) {
  ctx.fillText('If you\'re in the game', center, i * 40);
}
ctx.strokeText('strokes the word', center, h - 30);
