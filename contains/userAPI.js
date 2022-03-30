var ACCESS_KEY = '7zU-mAeriERM4GtHhEQPvsdrOnQpp6Iwx8e2jzLWH1Q';
export let DATA;

getPhotosFromApi();

function getPhotosFromApi() {
  return fetch(
    'https://api.unsplash.com/photos?page=3&per_page=10&order_by=popular&client_id=' +
      ACCESS_KEY,
  )
    .then(response => response.json())
    .then(json => {
      DATA = json;
    })
    .catch(error => {
      console.error(error);
    });
}
