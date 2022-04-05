import KeyControls from "../lib/KeyControls";

const canvas = document.querySelector('#board canvas');
const ctx = canvas.getContext('2d');

let x = canvas.width / 2;
let y = canvas.height / 2;
let color = 0;
const controls = new KeyControls();

function gameLoop() {
  requestAnimationFrame(gameLoop);

  x += controls.x;
  y += controls.y;
  if (!controls.action) {
    color += 10;
    if (color > 360) {
      color -= 360;
    }
  }

  ctx.fillStyle = `hsl(${ color }, 50%, 50%)`;
  ctx.fillRect(x, y, 50, 50);
}

requestAnimationFrame(gameLoop);
