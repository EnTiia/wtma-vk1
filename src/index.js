//Getting the lunc lists
import lunchList from './assets/sodexo-day-example.json';

window.addEventListener('DOMContentLoaded', (event) => {

  let coursesFi = [];

  const parseSodexoMenu = (sodexoDailyMenu) => {
    const courses = Object.values(sodexoDailyMenu);
    for (const course of courses) {
      coursesFi.push(course.category + ": " + course.title_fi);
    }
  };

  parseSodexoMenu(lunchList.courses);

  const SodexoData = { coursesFi };

  const renderMenu = (menu) => {
    const list = document.querySelector('#lunch-list');
    const modalBody = document.querySelector('.modal-body');
    list.innerHTML = '';
    for (const item of menu) {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      const modalText = document.createElement('li');
      modalText.innerText = item;
      list.appendChild(listItem);
      modalBody.appendChild(modalText);
    }
  };

  renderMenu(SodexoData.coursesFi);
});


//Modal
const modal = document.getElementById('modal');
const btn = document.getElementsByClassName('card-logo')[0];
const span = document.getElementsByClassName('close-modal')[0];

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


//Media rules
const logoText = document.createElement('div');
logoText.innerText = 'Lounari.';
logoText.id = 'logo-text';
const slogan = document.createElement('div');
slogan.innerText = 'Missä tänään syötäisiin.';
slogan.id = 'slogan';
const imgContainer = document.createElement('div');
imgContainer.classList.add("img-container");

const headerMedia = (media) => {
  const headerImg = document.querySelector('#header-img');
  const headerContent = document.querySelector('.header-content');
  if (media.matches) { // If media query matches
    headerImg.classList.remove("polygon");
    headerImg.appendChild(logoText);
    headerImg.appendChild(slogan);
    headerImg.appendChild(imgContainer);

  } else {
    headerImg.classList.add("polygon");
    headerContent.appendChild(logoText);
    headerContent.appendChild(slogan);
  }
};


let media = window.matchMedia("(max-width: 700px)");
headerMedia(media);// Call listener function at run time
media.addListener(headerMedia); // Attach listener function on state changes


//Hamburger menu
const mobileNavBtn = document.querySelector('#mobile-nav-btn');
const navContent = document.querySelector('.nav-content');
const bars = document.querySelector('.fa-bars');
const nav = document.querySelector('nav');

mobileNavBtn.addEventListener('click', event => {
  if (bars.className === 'fas fa-bars') {
    bars.classList.toggle('fa-times');
    nav.style.height = '100%';
  } else {
    bars.className = ('fas fa-bars');
    nav.style.height = '1rem';
  }
});
