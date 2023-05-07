import axios from 'axios';

export const useGetGoogleProfile = ({
  isSignup,
  user,
  setGProfile,
  getGoogleProfileReturns,
}) => {
  console.log('[user] - ', user);

  axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
    headers: {
      Authorization: `Bearer ${user.access_token}`,
      Accept: 'application/json',
    }
  })
    .then(({ data }) => {
      console.log('[profile] - ', data);
      setGProfile(data);
      const username = data.email.split('@')[0];
      localStorage.setItem('lh:username:5173', username);
      const options = {
        email: data.email,
        name: data.name,
        isSignup,
      };
      getGoogleProfileReturns(username, options);
    })
    .catch((err) => console.error(err));
}
