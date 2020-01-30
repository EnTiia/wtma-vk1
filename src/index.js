import fazerList from './assets/fazer.json';

const menu = [
  {name: 'Lingonberry jam', price: 4.00},
  {name: 'Mushroom and bean casserole', price: 5.50},
  {name: 'Chili-flavoured wheat', price: 3.00},
  {name: 'Vegetarian soup', price: 4.80},
  {name: 'Pureed root vegetable soup with smoked cheese', price: 8.00}
];

const validator = (str) => {
  const re = /^[A-ZÖÄÅ]{1}[A-ZÖÄÅa-zöäå0-9\s-/,()]{4,64}/;

  if (re.test(str)) {
    return true;
  }
  return false;
};

for (let i = 0; i < menu.length; i++) {
  console.log(menu[i].name, validator(menu[i].name));
};

const sortedMenu = menu.sort((a, b) => {
  return a.price - b.price;
});
console.log(sortedMenu);

const filteredMenu = menu.filter(a => a.price < 5);
console.log(filteredMenu);

const raisedPrices = menu.map(a => {
  let returnObject = {};
  returnObject.name = a.name;
  returnObject.price = parseFloat((a.price * 1.15).toFixed(2));

  return returnObject;
});
console.log(raisedPrices);

const sum = raisedPrices.reduce((acc, cur) => acc + cur.price, 0);
console.log(sum);

const fazerMenu = fazerList.LunchMenus;
let vegan = [];
fazerMenu.forEach(item => {
  const setMenus = item.SetMenus;
  setMenus.forEach(item => {
    item.Meals.forEach(item => {
      if (item.Diets.includes('Veg')) vegan.push(item);
    });
  });
});
console.log(vegan);
