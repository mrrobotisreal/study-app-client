import { useState, useCallback, useEffect } from 'react';
import 'dotenv';
import AWS from 'aws-sdk';
const REGION = 'us-west-2';
AWS.config.update({
  region: REGION,
  accessKeyId: 'AKIASYYXEDOSWM3TPH4M',
  secretAccessKey: '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',
});
const translate = new AWS.Translate();

export default function useTranslate() {
  const [translatedText, setTranslatedText] = useState(null);
  const [error, setError] = useState(null);

  const translateText = useCallback(async (textToTranslate, SourceLanguageCode, TargetLanguageCode, options = null) => {
    let isError = false;
    const params = options ? {
      SourceLanguageCode,
      TargetLanguageCode,
      Text: textToTranslate,
    } : {
      SourceLanguageCode,
      TargetLanguageCode,
      Text: textToTranslate,
      Settings: options,
    };
    let translateTextResponse;
    try {
      // translateTextResponse = await translate.translateText(params).promise();
      await translate.translateText(params, (err, data) => {
        if (err) console.log(err, err.stack);
        else {
          console.log(data);
          translateTextResponse = data;
          setTranslatedText(translateTextResponse.TranslatedText);
        }
      })
    } catch (err) {
      console.log(err, err.stack);
      isError = true;
      setError(err);
    } finally {
      if (isError) {
        console.log('ERROR ERROR ERROR')
        setTranslatedText('ERROR: Unable to translate text at this time.');
      } else {
        console.log('NO ERROR')
      }
    }
  }, []);

  return {
    translateText,
    translatedText,
    error,
    setError,
  };
};