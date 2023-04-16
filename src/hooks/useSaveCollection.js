import axios from 'axios';

export function useSaveCollection(collectionParams) {
  let options = {
    category: collectionParams.category,
    cardList: collectionParams.cardList,
    name: collectionParams.name,
    username: collectionParams.username,
  };
  let headers = {
    'content-type': 'application/json',
    'Access-Control-Allow-Credentials': true,
  }
  axios.post('http://localhost:3333/collections/add', options, headers)
    .then((data) => {
      // do stuff
      console.log('The data is:');
      console.log(data);
    })
    .catch((err) => console.error(err));
}