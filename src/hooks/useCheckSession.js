import axios from 'axios';

export const useCheckSession = (navigate) => {
  const username = localStorage.getItem('lh:username:5173');
  const token = localStorage.getItem('lh:user:5173');

  axios.post(`http://localhost:3333/session/${username}`, {
    token,
  })
    .then(({ data }) => {
      if (!data) {
        navigate('/blah');
      }
    })
    .catch((err) => console.error(err));
};