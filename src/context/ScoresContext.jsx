import { useState, useEffect, createContext } from 'react';

export const ScoresContext = createContext({});

export const ScoresContextProvider = ({ children }) => {
  const [hasBeatenHighScore, setHasBeatenHighScore] = useState(false);

  return (
    <ScoresContext.Provider value={{
      hasBeatenHighScore,
      setHasBeatenHighScore,
    }}>
      {children}
    </ScoresContext.Provider>
  )
};