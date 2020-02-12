import lunchList from './assets/sodexo-day-example.json';

window.addEventListener('DOMContentLoaded', (event) => {
  let language = 'fi';
  let sortDirection = 'asc';

  const menuButtons = document.querySelector('div.menu-buttons');
  const main = document.querySelector('main');

  const randomCourse = document.createElement('p');

  const lunches = Object.values(lunchList.courses);

  const coursesFi = lunches.map(a => a.title_fi);
  const coursesEn = lunches.map(a => a.title_en);

  const printMenu = (list) => {
    const menu = document.querySelector('#lunchList');
    menu.innerHTML = '';
    for (let item of list) {
      console.log(item);
      const menuItem = document.createElement('li');
      menuItem.innerText = item;
      menu.appendChild(menuItem);
    }
  };

  const sortArray = (array, sort) => {
    const sortAsc = (a, b) => {
      if (a > b) {
        return 1;
      } else if (b > a) {
        return -1;
      } else {
        return 0;
      }
    };

    const sortDesc = (a, b) => {
      if (a < b) {
        return 1;
      } else if (b < a) {
        return -1;
      } else {
        return 0;
      }
    };

    if (sort === 'desc') {
      return array.sort(sortDesc);
    } else {
      return array.sort(sortAsc);
    }
  };

  const sortButton = document.createElement('button');
  sortButton.classList.add('sort-button');
  sortButton.innerText = 'Järjestä';

  sortButton.addEventListener('click', event => {
    const array = (language === 'fi') ? coursesFi : coursesEn;
    const sortedArray = sortArray(array, sortDirection);
    if (sortDirection === 'asc'){
      sortDirection = 'desc';
    } else {
      sortDirection = 'asc';
    }

    printMenu(sortedArray);
  });

  const languageButton = document.createElement('button');
  languageButton.classList.add('language-button');
  languageButton.innerText = 'Vaihda kieltä';

  const randomButton = document.createElement('button');
  randomButton.classList.add('random-button');
  randomButton.innerText = 'Arvo satunnainen ruokalaji';

  languageButton.addEventListener('click', event => {
    if (language === 'fi'){
      language = 'en';
      languageButton.innerText = 'Change language';
      sortButton.innerText = 'Sort';
      randomButton.innerText = 'Select random course';
      printMenu(coursesEn);
    } else {
      language = 'fi';
      languageButton.innerText = 'Vaihda kieltä';
      sortButton.innerText = 'Järjestä';
      randomButton.innerText = 'Arvo satunnainen ruokalaji';
      printMenu(coursesFi);
    }
  });

  randomButton.addEventListener('click', event => {
    const array = (language === 'fi') ? coursesFi : coursesEn;
    const random = Math.floor(Math.random()*array.length);
    console.log(random);
    randomCourse.innerText = array[random];
  });

  menuButtons.appendChild(sortButton);
  menuButtons.appendChild(languageButton);
  menuButtons.appendChild(randomButton);
  main.appendChild(randomCourse);

  printMenu((language === 'fi') ? coursesFi : coursesEn);
});

const modal = document.getElementById('modal');
const btn = document.getElementsByClassName('card-logo')[0];
const span = document.getElementsByClassName('close-modal')[0];

btn.onclick = function() {
  modal.style.display = "block";
};

span.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
