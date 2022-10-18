import imageHandler from './imageHandler';
import { fetchImageByQuery } from './unsplashService/api';

(() => {
  fetchImageByQuery({
    queryString: 'sunrise',
    page: Math.floor((Math.random() * 10))
  }).then((response) => {
    imageHandler(response.results[0].urls.regular).then((response) => {

    }).catch((error) => {
      console.log(error);
    });
  }).catch((error) => {
    console.log(error);
  });
})();
