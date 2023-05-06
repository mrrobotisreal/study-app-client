import { createContext, useState } from 'react';

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