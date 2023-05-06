import axios from 'axios';

export async function useGetCollections(user) {
  let options = {
    user,
  }
  let headers = {
    'content-type': 'application/json',
    'Access-Control-Allow-Credentials': true,
  }
  let { data } = await axios.post('http://localhost:3333/app/collections', options, headers);
  // for (let i = 0; i < data.length; i++) {
  //   console.log('DATA[i]');
  //   console.log(data[i]);
  // }
  // store
    // .then(({ data }) => {
    //   console.log('The data we received be like...\n\n');
    //   console.log(data);
    //   collections = data;
    // })
    // .catch((err) => console.error());
  return data;
}