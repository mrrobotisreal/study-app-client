import axios from 'axios';

export const useCheckSession = (username, setHasSession, setIsLoading) => {
  // const username = localStorage.getItem('lh:username:5173');
  const token = localStorage.getItem('lh:user:5173');

  if (!username || !token) {
    setHasSession(false);
    setIsLoading(false);
    return;
  }

  axios.post(`http://localhost:3333/session/${username}`, {
    token,
  })
    .then(({ data }) => {
      setHasSession(() => !data ? false : true);
      setIsLoading(false);
    })
    .catch((err) => console.error(err));
};