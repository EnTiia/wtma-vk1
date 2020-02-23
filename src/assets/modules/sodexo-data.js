import SodexoLunchMenu from '../sodexo-day-example.json';
import fetchUrl from './fetch';

//console.log(SodexoLunchMenu.courses);
const sodexoData = fetchUrl('https://www.sodexo.fi/ruokalistat/output/daily_json/152/2020-02-17');
sodexoData.then(data => console.log(data.courses));

let coursesEn = [];
let coursesFi = [];

/**
 * Extract courses from Sodexo's json object to menu arrays
 *
 * @param {Object} sodexoDailyMenu
 */
const parseSodexoMenu = (sodexoDailyMenu) => {
  const courses = Object.values(sodexoDailyMenu);
  for (const course of courses) {
    coursesFi.push(course.category + ": " +  course.title_fi);
    coursesEn.push(course.title_en);
  }
};

parseSodexoMenu(SodexoLunchMenu.courses);

const SodexoData = {coursesEn, coursesFi};

export default SodexoData;
