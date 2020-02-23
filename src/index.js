import init from './assets/modules/menus';

const modal = document.getElementById('theme-switch');
const btn = document.getElementById('switch-theme');
const span = document.getElementsByClassName('close-modal')[1];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const light = document.querySelector('#light-theme');
const colorful = document.querySelector('#colorful-theme');
const colorThemeLink = document.querySelector('#colorTheme');

const lightTheme = () => {
  colorThemeLink.href = '';
  window.localStorage.setItem('colorTheme', 'light');
};

const colorfulTheme = () => {
  colorThemeLink.href = 'assets/css/theme.css';
  window.localStorage.setItem('colorTheme', 'colorful');
};

const execute = () => {
  init();

  const colorTheme = window.localStorage.getItem('colorTheme') || 'colorful';

  if (colorTheme === 'colorful') {
    colorfulTheme();
  } else {
    lightTheme();
  }

  light.addEventListener('click', lightTheme);
  colorful.addEventListener('click', colorfulTheme);

};

execute();
