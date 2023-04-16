// import { useState, useCallback, useContext } from 'react';
// import { en } from './en';
// import { ru } from './ru';
// import { AppContext } from '../AppContext';

// export default function useLocalize() extends  {
//   const { prefLang } = useContext(AppContext);

//   const localize = useCallback((text) => {
//     switch (prefLang) {
//       case 'en' || 'en-US':
//         return en[text];
//       case 'ru' || 'ru-RU':
//         return ru[text];
//       default:
//         return en[text];
//     }
//     return en[text];
//   }, [prefLang]);

//   return localize;
// }