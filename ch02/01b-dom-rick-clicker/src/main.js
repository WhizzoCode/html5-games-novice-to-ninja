let clickers = 50;
let startTime = Date.now();

for (let i = 0; i < clickers; i++) {
  const pos = {
    x: Math.random() * 500,
    y: Math.random() * 300
  };
  
  const img = new Image();
  img.src = './res/images/rick.png';
  img.style.position = 'absolute';
  img.style.left = `${ pos.x }px`;
  img.style.top = `${ pos.y }px`;
  img.addEventListener('click', removeClicker, false);

  document.querySelector('#board').appendChild(img);
}

function removeClicker(e) {
  e.target.parentNode.removeChild(e.target);
  clickers--;
  document.querySelector('#remain').innerHTML = clickers;
  if (clickers === 0) {
    const taken = Math.round((Date.now() - startTime) / 1000);
    alert(`De-rick-ed in ${ taken } seconds!`);
  }
}
