const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';

const fetchOptions = {
  method: 'GET',
  mode: 'cors',
  cache: 'no-cache',
  headers: {
    'origin': null
  },
};

const fetchUrl = async (url) => {
  let request;
  try {
    request = await fetch(corsAnywhere + url, fetchOptions);
    if (!request.ok) {
      throw new Error(`HTTP ${request.status} ${request.statusText}`);
    }
  } catch (error) {
    console.error('fetchUrl error', error.message);
  }
  let response = await request.json();
  return response;
};

/*
fetchUrl('https://www.sodexo.fi/ruokalistat/output/daily_json/152/2020-02-17')
  .then(data => console.log(data));
*/

export default fetchUrl;
