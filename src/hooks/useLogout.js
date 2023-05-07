import axios from 'axios';

export async function useLogout(username, setHasSession, addNotification, clearNotification) {
  axios.get(`http://localhost:3333/logout/${username}`)
    .then(({ data }) => {
      console.log(data);
      setHasSession(false);
      localStorage.removeItem('lh:username:5173');
      localStorage.removeItem('lh:user:5173');
      addNotification({
        header: 'Successfully logged out',
        content: 'Hopefully we\'ll see you again soon, take care!',
        type: 'success',
        dismissible: true,
        dismissLabel: 'Dismiss message',
        onDismiss: () => clearNotification('logout-success'),
        id: 'logout-success',
      });
    })
    .catch((err) => {
      console.error(err);
      addNotification({
        header: 'Error logging out',
        content: 'It looks like something went wrong while trying to log you out. Please try again to ensure you\'re successfully logged out.',
        type: 'error',
        dismissible: true,
        dismissLabel: 'Dismiss message',
        onDismiss: () => clearNotification('logout-error'),
        id: 'logout-error',
      });
    });
}