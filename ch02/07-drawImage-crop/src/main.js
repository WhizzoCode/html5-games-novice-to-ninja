const canvas = document.querySelector('#board canvas');
const ctx = canvas.getContext('2d');

const img = new Image();
img.src = './res/images/rick.png';
img.addEventListener('load', draw, false);

function draw() {
  for (let i = 0; i < 22; i++) {
    ctx.drawImage(
      img,
      32, 0, 53, 75,
      i * 20, i * 10,
      i * 0.2 * 53, i * 0.2 * 75
    );
  }
}
