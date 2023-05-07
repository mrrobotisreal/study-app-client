import axios from 'axios';

export function useSaveUser({ email, username, password, setIsAuthenticated, setIsLoadingSubmit, addNotification, clearNotification }) {
  const options = {
      email,
      username,
      password,
  };
  axios.post('http://localhost:3333/signup', options)
    .then(({ data }) => {
      localStorage.setItem('lh:user:5173', data);
      setIsAuthenticated(true);
      setIsLoadingSubmit(false);
      addNotification({
        header: 'Successfully registered!',
        content: 'Welcome to Приложение Юли! Your account has successfully been created, and now you can start exploring all of the amazing study tools this site has to offer. Please take a look through the tabs on the home page, and then feel free to explore the side navigation options and help panel as well. We\'ve started a session for you, which means that even if you leave the page or close the browser, once you navigate back to the Приложение Юли home page you will already be logged in. This is to make things easier on you, but if you wish to log out after each visit you just need to click the dropdown in the upper right hand corner of the page and choose "Logout" at the bottom. Let\'s begin!',
        type: 'success',
        dismissible: true,
        dismissLabel: 'Dismiss message',
        onDismiss: () => clearNotification('signup-success'),
        id: 'signup-success',
      });
    })
    .catch((err) => {
      console.error(err);
      addNotification({
        header: 'Error during registration process',
        content: 'Uh oh! It looks like there was a problem registering your account. Please try again in a moment.',
        type: 'error',
        dismissible: true,
        dismissLabel: 'Dismiss message',
        onDismiss: () => clearNotification('signup-error'),
        id: 'signup-error',
      });
    });
}