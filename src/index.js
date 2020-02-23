import SodexoData from './assets/modules/sodexo-data';
import {getParsedMenuFazer} from './assets/modules/fazer-data';

let lang = 'fi';

let sodexoData;
/**
 * Sorts an array alphapetically
 *
 * @param {Array} courses - Menu array
 * @param {Array} order - 'asc' or 'desc'
 * @returns {Array} sorted menu
 */
const sortCourses = (courses, order = 'asc') => {
  let sortedMenu = courses.sort();
  if (order === 'desc') {
    sortedMenu.reverse();
  }
  return sortedMenu;
};

/**
 * Renders html list items from menu data
 *
 * @param {string} restaurant - name of the selector/restaurant
 * @param {Array} menu - menu data
 */
const renderMenu = (restaurant, menu) => {
  const list = document.querySelector('#' + restaurant);
  list.innerHTML = '';
  for (const item of menu) {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    list.appendChild(listItem);
  }
};

/**
 * Picks a random course item from an array
 *
 * @param {Array} courses
 * @returns {string} course
 */
const pickRandomCourse = courses => {
  const randomIndex = Math.floor(Math.random() * courses.length);
  return courses[randomIndex];
};

const sodexoRandomCourse = document.createElement('p');
const fazerRandomCourse = document.createElement('p');
const main = document.querySelector('main');
main.appendChild(sodexoRandomCourse);
main.appendChild(fazerRandomCourse);

const displayRandomCourse = () => {
  sodexoRandomCourse.innerText = 'Sodexo: ' + 'fi: ' + pickRandomCourse(sodexoData.coursesFi) + ' en: ' + pickRandomCourse(sodexoData.coursesEn);
  fazerRandomCourse.innerText = 'Fazer: ' + 'fi: ' + pickRandomCourse(getParsedMenuFazer('fi')) + ' en: ' + pickRandomCourse(getParsedMenuFazer('en'));
};

const switchLanguage = () => {
  if (lang === 'fi') {
    lang = 'en';
    renderMenu('sodexo', sodexoData.coursesEn);
    renderMenu('fazer', getParsedMenuFazer('en'));
  } else {
    lang = 'fi';
    renderMenu('sodexo', sodexoData.coursesFi);
    renderMenu('fazer', getParsedMenuFazer('fi'));
  }
};

const renderSortedMenu = () => {
  if (lang === 'fi') {
    renderMenu('sodexo', sortCourses(sodexoData.coursesFi));
    renderMenu('fazer', sortCourses(getParsedMenuFazer('fi')));
  } else {
    lang = 'en';
    renderMenu('sodexo', sortCourses(sodexoData.coursesEn));
    renderMenu('fazer', sortCourses(getParsedMenuFazer('en')));
  }
};

const init = async () => {
  sodexoData = await SodexoData.sodexoCourses();

  renderMenu('sodexo', sodexoData.coursesFi);
  console.log('typeof', sodexoData);
  renderMenu('fazer', getParsedMenuFazer('fi'));
  document.querySelector('#switch-lang').addEventListener('click', switchLanguage);
  document.querySelector('#sort-menu').addEventListener('click', renderSortedMenu);
  document.querySelector('#pick-dish').addEventListener('click', displayRandomCourse);
};

init();
