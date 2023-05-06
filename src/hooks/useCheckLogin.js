import axios from 'axios';

export async function useCheckLogin({ username, password, setIsAuthenticated, setIsLoading }) {
  const options = {
    password,
  }
  axios.post(`http://localhost:3333/user/${username}`, options)
    .then(({ data }) => {
      console.log('[DATA] - ', data);
      setIsAuthenticated(data.AuthResult);
      setIsLoading(false);
      localStorage.setItem('lh:user:5173', data.JWT);
      localStorage.setItem('lh:username:5173', username);
    })
    .catch((err) => console.error(err));
  // const isAuthenticated = await axios.post(`http://localhost:3333/user/${username}`, options);
  // console.log('[IS_AUTHENTICATED] - ', isAuthenticated.AuthResult);
  // return isAuthenticated.AuthResult;
}