import axios from 'axios';

export const useSetSession = (username, options, setHasSession, setIsLoadingSubmit, addNotification, clearNotification) => {
  console.log('set-session username: ', username);
  console.log(options)
  axios.post(`http://localhost:3333/set-session/${username}`, options)
    .then(({ data }) => {
      console.log('[SET-SESSION] - data\n', data);
      if (data.JWT) {
        localStorage.setItem('lh:user:5173', data.JWT);
        setHasSession(true);
        setIsLoadingSubmit(false);
        addNotification(options.isSignup
          ? {
            header: 'Successfully registered using Google!',
            content: 'Welcome to Приложение Юли! Your account has successfully been created using your Google account, and now you can start exploring all of the amazing study tools this site has to offer. Please take a look through the tabs on the home page, and then feel free to explore the side navigation options and help panel as well. We\'ve started a session for you, which means that even if you leave the page or close the browser, once you navigate back to the Приложение Юли home page you will already be logged in. This is to make things easier on you, but if you wish to log out after each visit you just need to click the dropdown in the upper right hand corner of the page and choose "Logout" at the bottom. Let\'s begin!',
            type: 'success',
            dismissible: true,
            dismissLabel: 'Dismiss message',
            onDismiss: () => clearNotification('google-signup-success'),
            id: 'google-signup-success',
          } : {
            header: 'Successfully authenticated with Google!',
            content: 'Welcome back to Приложение Юли! We\'ve started up a new session for you. Let\' get started again!',
            type: 'success',
            dismissible: true,
            dismissLabel: 'Dismiss message',
            onDismiss: () => clearNotification('google-signin-success'),
            id: 'google-signin-success',
          }
        );
      }
    })
    .catch((err) => {
      addNotification(options.isSignup
        ? {
          header: 'Error during signup process',
          content: 'Uh oh! It looks like there was a problem using to Google account to sign up. Please try again, or manually create your new account.',
          type: 'error',
          dismissible: true,
          dismissLabel: 'Dismiss message',
          onDismiss: () => clearNotification('google-signup-error'),
          id: 'google-signup-error',
        } : {
          header: 'Error during sign in process',
          content: 'Uh oh! It looks like there was a problem using to Google account to sign in. Please try again, or use another sign in method.',
          type: 'error',
          dismissible: true,
          dismissLabel: 'Dismiss message',
          onDismiss: () => clearNotification('google-signin-error'),
          id: 'google-signin-error',
        });
      console.error(err);
    }
  )
}
