import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import Spinner from '@cloudscape-design/components/spinner';

const regex = /([\,\.\!\?\s])+/;

const sampleText = `Next, in our onSuccess function, we set our profile state with the data that was returned. This data contains the user’s details, like google_id, access_token, email, name, and so on. On any change in the user array, next our useEffect hook will run and get the user details next using the access token returned from Google login. User is a dependency to ensure that on any change in the user array i.e. next from null array to when we get the response from Google login next, useEffect will be watching and then trigger accordingly.`;

export default function TextReader() {
  const { text } = useParams();
  const [textWords, setTextWords] = useState([]);
  const [vocabWords, setVocabWords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleWordClick = (e) => {
    console.log(e.target.textContent);
    const isBackgroundYellow = (e.target.style.backgroundColor === 'yellow');
    if (isBackgroundYellow) {
      console.log("It's yellow!");
      e.target.style.backgroundColor = null;
      const updatedVocabs = vocabWords.filter((word) => {
        return word === e.target.textContent.replace(regex, '').toLowerCase();
      });
      setVocabWords(() => updatedVocabs);
      checkForSameWord(e.target.textContent.replace(regex, '').toLowerCase(), true);
    } else {
      console.log('No yellow here my dude!');
      e.target.style.backgroundColor = 'yellow';
      let newWord = e.target.textContent.replace(regex, '').toLowerCase();
      if (vocabWords.includes(newWord)) {
        console.log('word already exists in vocab words');
        return;
      }
      console.log('newWord be like> ', newWord);
      setVocabWords((prevWords) => [...prevWords, newWord]);
      checkForSameWord(newWord, false);
    }
  };

  const checkForSameWord = (word, isHighlighted) => {
    document.getElementById('textReader.content').childNodes.forEach((child) => {
      if (word === child.textContent.replace(regex, '').toLowerCase()) {
        console.log('it be da same!!!');
        child.style.backgroundColor = !isHighlighted ? 'yellow' : null;
      } else {
        console.log("That shit ain't the same!")
      }
    });
  };

  const formatText = (textToFormat) => {
    const wordComps = [];
    const words = textToFormat.split(' ');
    // const regex = /([\,\.\!\?\'])/g;
    words.forEach((word) => {
      let wordComp = (
        <span>{word}&nbsp;</span>
      );
      wordComps.push(wordComp);
      setTextWords(wordComps);
    });
    setIsLoading(false);
  };

  useEffect(() => {
    formatText(sampleText);
  }, [])

  useEffect(() => {
    console.log('usin dat effect>\n', vocabWords);
  }, [vocabWords])

  return (
    <Container
      header={
        <Header
          variant="h1"
        >
          {text}
        </Header>
      }
    >
      {
        !isLoading
        ? (
          <div id="textReader.content" onClick={handleWordClick}>
            {
              textWords.map((word) => {
                return word;
              })
            }
          </div>
        )
        : <Spinner size="large" />
      }
    </Container>
  );
}