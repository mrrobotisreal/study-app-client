import axios from 'axios';

export const useSetSession = (username, options, setHasSession, setIsLoadingSubmit) => {
  console.log('set-session username: ', username);
  console.log(options)
  axios.post(`http://localhost:3333/set-session/${username}`, options)
  .then(({ data }) => {
    console.log('[SET-SESSION] - data\n', data);
    if (data.JWT) {
      localStorage.setItem('lh:user:5173', data.JWT);
      setHasSession(true);
      setIsLoadingSubmit(false);
    }
  })
  .catch((err) => console.error(err));
}