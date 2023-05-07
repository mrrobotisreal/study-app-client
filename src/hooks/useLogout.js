import axios from 'axios';

export async function useLogout(username, setHasSession) {
  console.log('What da prob be???\n', username);
  axios.get(`http://localhost:3333/logout/${username}`)
    .then(({ data }) => {
      console.log(data);
      setHasSession(false);
      localStorage.removeItem('lh:username:5173');
      localStorage.removeItem('lh:user:5173');
    })
    .catch((err) => console.error(err));
}