import axios from 'axios';

export async function useCheckLogin({ username, setUsername, password, setIsAuthenticated, setIsLoadingSubmit, addNotification, clearNotification }) {
  const options = {
    password,
  }
  axios.post(`http://localhost:3333/user/${username}`, options)
    .then(({ data }) => {
      setIsAuthenticated(data.AuthResult);
      setUsername(data.Username);
      localStorage.setItem('lh:user:5173', data.JWT);
      localStorage.setItem('lh:username:5173', username);
      addNotification(data.AuthResult
        ? {
          header: 'Successfully authenticated!',
          content: 'Welcome back to Приложение Юли! We\'ve started up a new session for you. Let\' get started again!',
          type: 'success',
          dismissible: true,
          dismissLabel: 'Dismiss message',
          onDismiss: () => clearNotification('auth-success'),
          id: 'auth-success',
        } : {
          header: 'Error during authentication process',
          content: 'Uh oh! It looks like there was a problem with either your username or password.',
          type: 'error',
          dismissible: true,
          dismissLabel: 'Dismiss message',
          onDismiss: () => clearNotification('auth-error'),
          id: 'auth-error',
        }
      )
      setIsLoadingSubmit(false);
    })
    .catch((err) => console.error(err));
}