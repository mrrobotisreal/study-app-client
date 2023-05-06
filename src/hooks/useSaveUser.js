import axios from 'axios';

export function useSaveUser({ email, username, password }) {
  console.log('[email]\n', email);
  console.log('[username]\n', username);
  console.log('[password]\n', password);
  const options = {
      email,
      username,
      password,
  };
  axios.post('http://localhost:3333/signup', options)
    .then(({ data }) => {
      console.log('[handleSignupSubmit]\n', data);
      localStorage.setItem('lh:user:5173', data);
    })
    .catch((err) => console.error(err));
}