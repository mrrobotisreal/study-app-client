import { useState, useEffect, createContext } from 'react';

export const AppContext = createContext(null);

export function AppContextProvider({ children }) {
  const [test, setTest] = useState('Hello!');
  const [prefLang, setPrefLang] = useState('');
  const [jsonText, setJsonText] = useState({});

  useEffect(() => {
    setPrefLang(window.navigator.language);
  }, [window.navigator.language]);

  const values = {
    test,
    prefLang,
    setPrefLang,
  };

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  )
}