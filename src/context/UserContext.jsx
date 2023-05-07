import { createContext, useState, useEffect } from 'react';

// export const UserContext = createContext({
//   username: '',
//   setUsername: null,
//   email: '',
//   setEmail: null,
//   test: () => {},
// });

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const test = () => {}

  useEffect(() => {
    const storeUsername = setTimeout(() => {
      if (username) {
        localStorage.setItem('lh:username:5173', username);
      }
    }, 500);

    return () => clearTimeout(storeUsername);
  }, [username])

  const valueObj = {
    username,
    setUsername,
    email,
    setEmail,
    test
  };

  return (
    <UserContext.Provider value={valueObj}>
      {children}
    </UserContext.Provider>
  )
};