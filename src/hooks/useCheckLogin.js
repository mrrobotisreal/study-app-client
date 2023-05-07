import axios from 'axios';

export async function useCheckLogin({ username, setUsername, password, setIsAuthenticated, setIsLoadingSubmit }) {
  const options = {
    password,
  }
  axios.post(`http://localhost:3333/user/${username}`, options)
    .then(({ data }) => {
      setIsAuthenticated(data.AuthResult);
      setUsername(data.Username);
      localStorage.setItem('lh:user:5173', data.JWT);
      localStorage.setItem('lh:username:5173', username);
      setIsLoadingSubmit(false);
    })
    .catch((err) => console.error(err));
}