import SodexoLunchMenu from '../sodexo-day-example.json';
import fetchUrl from './fetch';

const menuData = fetchUrl('https://www.sodexo.fi/ruokalistat/output/daily_json/152/2020-02-17');
menuData.then(data => console.log(data.courses));

const sodexoCourses = async () => {

  let coursesEn = [];
  let coursesFi = [];

  const data = await menuData;
  const courses = Object.values(data.courses);
  for (const course of courses) {
    coursesFi.push(course.category + ": " +  course.title_fi);
    coursesEn.push(course.title_en);
  }

  return { coursesEn, coursesFi };
};

export default {
  sodexoCourses
};
