const cheatList = ['h', 'e', 'l', 'l', 'o'];
let keyNumber = 0;

document.addEventListener('keydown', event => {
  console.log(event.key);
  if (event.key === cheatList[keyNumber]) {
    keyNumber++;
  } else {
    keyNumber = 0;
  }
  if (keyNumber === 5) {
    keyNumber = 0;
    alert('Hello!');
  }
});

document.addEventListener('dblclick', event => {
  console.log('X coords: ' + event.clientX + ', Y coords: ' + event.clientY);
});

const touchElement = document.createElement('div');
const body = document.querySelector('body');
body.appendChild(touchElement);

touchElement.addEventListener('touchstart', event => {
  console.log('You touched the box!');
});

const timeout = document.createElement('p');
body.appendChild(timeout);
window.addEventListener('DOMContentLoaded', event => {
  setTimeout(() => timeout.innerText = 'Hurry!', 15000);
});

const idleTime = document.createElement('p');
body.appendChild(idleTime);
window.addEventListener('DOMContentLoaded', event => {
  let idle = 0;

  const timer = () => {
    idle ++;
    if (idle === 15) {
      idleTime.innerText = 'Hurry up!';
      idle = 0;
    }
  };

  const reset = () => {
    idle = 0;
  };

  setInterval(timer, 1000);

  window.addEventListener('mousedown', reset);
  window.addEventListener('mousemove', reset);
  window.addEventListener('keyup', reset);
  window.addEventListener('keydown', reset);
});
