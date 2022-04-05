import MouseControls from "../lib/MouseControls";

const canvas = document.querySelector('#board canvas');
const ctx = canvas.getContext('2d');

let color = 0;
const mouse = new MouseControls(canvas);

function gameLoop() {
  requestAnimationFrame(gameLoop);

  if (mouse.pressed) {
    color += 10;
    if (color > 360) {
      color -= 360;
    }
  }

  ctx.fillStyle = `hsl(${ color }, 50%, 50%)`;
  ctx.fillRect(mouse.pos.x, mouse.pos.y, 50, 50);

  mouse.update();
}

requestAnimationFrame(gameLoop);
