import { createContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const initialColls = [];

export const CollectionContext = createContext({
  collections: initialColls,
  refreshCollections: () => {},
});

export const CollectionContextProvider = ({ children }) => {
  const [colls, setColls] = useState(initialColls);
  const [selectedColl, _setSelectedColl] = useState('');

  const getUserCollections = async (user) => {
    let options = {
      user,
    }
    let headers = {
      'content-type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    }
    let { data } = await axios.post('http://localhost:3333/app/collections', options, headers);
    setColls(data);
  };

  const refreshCollections = () => {
    const storedUsername = localStorage.getItem('lh:username:5173');
    if (!storedUsername) {
      console.log('no stored user');
      return;
    }
    getUserCollections(storedUsername);
  };

  const setSelectedColl = (name) => {
    if (colls.length > 0) {
      const _selectedColl = colls.filter((coll) => coll.name === name).name;
      _setSelectedColl(_selectedColl);
    }
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem('lh:username:5173');
    if (!storedUsername) {
      console.log('no stored user');
      return;
    }
    getUserCollections(storedUsername);
  }, [])

  const valueObj = {
    collections: colls,
    refreshCollections,
    selectedColl,
    setSelectedColl,
  };

  return (
    <CollectionContext.Provider
      value={valueObj}
    >
      {children}
    </CollectionContext.Provider>
  )
};