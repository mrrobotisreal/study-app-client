import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import useTranslate from '../hooks/useTranslate';

export const TextsContext = createContext({});

export const TextsContextProvider = ({ children }) => {
  const [textsArray, setTextsArray] = useState([]);
  const [selectedText, setSelectedText] = useState({});
  const [dictionary, setDictionary] = useState([]);
  const { translateText, translatedText } = useTranslate();

  const addToDictionary = async (word) => {
    console.log('is this even firing AT ALL???????');
    if (!dictionary || dictionary.length === 0) {
      let translation = await translateText(word, 'ru', 'en');
      console.log('[translation??] >> ', translation);
      setDictionary(() => [...dictionary, {
        word,
        translation: translation.TranslatedText,
      }])
    }
    dictionary.forEach(async (entry) => {
      console.log('dictionary word >> ', word);
      console.log('dictionary entry >> ', entry);
      if (entry.word === word) {
        return;
      } else {
        let translation = await translateText(word, 'ru', 'en');
        let formattedWord = {
          word,
          translation: translation.TranslatedText,
        }
        setDictionary(() => [...dictionary, formattedWord])
      }
    });
  };

  useEffect(() => {
    const newText = `"Франция выбирает нового президента"

    В воскресенье, 23 апреля, Франция провела первый тур президентских выборов. Было зарегистрировано 11 кандидатов, но из них только четверо смогли набрать более 10% голосов.

    Самый большой результат показал Эммануэль Макрон, бывший министр экономики Франции, который получил 24% голосов. Второе место заняла Марин Ле Пен, лидер крайне правой партии Национальный фронт, с результатом 21,3%.

    Третье место досталось Франсуа Фийону, бывшему премьер-министру Франции, который получил 20% голосов. Жан-Люк Меланшон, лидер крайне левой партии Фронт народного единства, занял четвертое место с результатом 19,6%.

    Второй тур выборов состоится 7 мая, где Макрон и Ле Пен будут соревноваться за пост президента Франции. В случае победы Макрона он станет самым молодым президентом Франции в истории.

    Выборы проходят на фоне высокой напряженности в Европе, связанной с ростом популизма и национализма. Результаты выборов во Франции будут иметь важное значение для политической стабильности не только в стране, но и в Европе в целом.`;
    setTextsArray(() => [...textsArray, newText])
    setSelectedText({
      text: `"Франция выбирает нового президента"

      В воскресенье, 23 апреля, Франция провела первый тур президентских выборов. Было зарегистрировано 11 кандидатов, но из них только четверо смогли набрать более 10% голосов.

      Самый большой результат показал Эммануэль Макрон, бывший министр экономики Франции, который получил 24% голосов. Второе место заняла Марин Ле Пен, лидер крайне правой партии Национальный фронт, с результатом 21,3%.

      Третье место досталось Франсуа Фийону, бывшему премьер-министру Франции, который получил 20% голосов. Жан-Люк Меланшон, лидер крайне левой партии Фронт народного единства, занял четвертое место с результатом 19,6%.

      Второй тур выборов состоится 7 мая, где Макрон и Ле Пен будут соревноваться за пост президента Франции. В случае победы Макрона он станет самым молодым президентом Франции в истории.

      Выборы проходят на фоне высокой напряженности в Европе, связанной с ростом популизма и национализма. Результаты выборов во Франции будут иметь важное значение для политической стабильности не только в стране, но и в Европе в целом.`
    })
  }, [])

  return (
    <TextsContext.Provider value={{
      selectedText,
      setSelectedText,
      textsArray,
      setTextsArray,
      dictionary,
      addToDictionary,
    }}>
      {children}
    </TextsContext.Provider>
  )
}