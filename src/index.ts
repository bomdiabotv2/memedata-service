import { fetchImageByQuery } from './unsplashedService/api';

(() => {
  fetchImageByQuery({
    queryString: 'sunrise',
    page: Math.floor((Math.random() * 10))
  }).then((response) => {
    console.log(response.results.length);

    console.log(response.results[0].urls.regular);
  }).catch((error) => {
    console.log(error);
  });
})();
