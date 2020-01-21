window.addEventListener('DOMContentLoaded', (event) => {
  let language = 'fi';
  let sortDirection = 'asc';

  const cardContent = document.querySelector('div.card-content');
  const main = document.querySelector('main');

  const randomCourse = document.createElement('p');

  const coursesEn = ["Hamburger, cream sauce and poiled potates",
    "Goan style fish curry and whole grain rice",
    "Vegan Chili sin carne and whole grain rice",
    "Broccoli puree soup, side salad with two napas",
    "Lunch baguette with BBQ-turkey filling",
    "Cheese / Chicken / Vege / Halloum burger and french fries"];

  const coursesFi = ["Jauhelihapihvi, ruskeaa kermakastiketta ja keitettyä perunaa",
    "Goalaista kalacurrya ja täysjyväriisiä",
    "vegaani Chili sin carne ja täysjyväriisi",
    "Parsakeittoa,lisäkesalaatti kahdella napaksella",
    "Lunch baguette with BBQ-turkey filling",
    "Juusto / Kana / Kasvis / Halloumi burgeri ja ranskalaiset"];

  const printMenu = (list) => {
    const menu = document.querySelector('#lunchList');
    menu.innerHTML = '';
    for (item of list) {
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
  languageButton.innerText = 'Vaihda kieltä';

  const randomButton = document.createElement('button');
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

  cardContent.appendChild(sortButton);
  cardContent.appendChild(languageButton);
  cardContent.appendChild(randomButton);
  main.appendChild(randomCourse);

  printMenu((language === 'fi') ? coursesFi : coursesEn);
});


