import { useState, useEffect } from 'react';
import axios from 'axios';
import Autosuggest from '@cloudscape-design/components/autosuggest';
import Box from '@cloudscape-design/components/box';
import Button from '@cloudscape-design/components/button';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import Input from '@cloudscape-design/components/input';
import SpaceBetween from '@cloudscape-design/components/space-between';
// import words from 'an-array-of-english-words';

const API_KEY = "dict.1.1.20230221T064701Z.766943ccd7ab99e5.87ea763933e14f3b24b11ca665511bb6dc8c5f36";

export default function Dictionary() {
  const [value, setValue] = useState('');
  const [valuePos, setValuePos] = useState('');
  const [definitions, setDefinitions] = useState([]);

  // useEffect(() => {
  //   let opts = [];
  //   for (const word of words) {
  //     console.log(word);
  //     opts.push({
  //       value: word,
  //     });
  //   }
  //   setOptions(opts);
  // }, []);

  const fetchDict = () => {
    // call Yandex dictionary api
    axios.get(`https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${API_KEY}&lang=en-ru&text=${value}`)
      .then(({ data }) => {
        console.log("YANDEX be like:\n\n");
        console.log(data);
        setDefinitions(data.def);
      })
      .catch((err) => console.error(err));
  };

  return (
    <Container
      header={
        <Header
          variant="h1"
          description="Just enter the word you wish to look up, and it will do the rest for you!"
        >
          Welcome to: Russian Dictionary! 🇷🇺
        </Header>
      }
    >
      <SpaceBetween direction="vertical" size="m">
        {/* <Autosuggest
          onChange={({ detail }) => setValue(detail.value)}
          value={value}
          enteredTextLabel={value => `Use: "${value}"`}
          ariaLabel="Autosuggest English word to look up in Russian dictionary."
          placeholder="Enter a word to look up in the Russian dictionary..."
          empty="No matches found"
        /> */}
        <Input
          onChange={({ detail }) => setValue(detail.value)}
          value={value}
          placeholder="Enter the word you wish to translate here..."
          type="search"
        />
        <Button
          variant="primary"
          onClick={fetchDict}
        >
          Search!
        </Button>
        <Container
          header={
            <Header variant="h1">
              {value === '' ? 'Search for a word in the input above ^ 😄' : value}
            </Header>
          }
        >
          {definitions.map((definition) => {
            console.log('DEFINTION');
            console.log(definition);
            return (
              <SpaceBetween direction="vertical" size="s">
                <Box variant="awsui-key-label" color="inherit">
                  Searched text:
                </Box>
                <Box variant="p" color="inherit">
                  {definition.text}
                </Box>
                <Box variant="awsui-key-label" color="inherit">
                  Part of speech:
                </Box>
                <Box variant="p" color="inherit">
                  {definition.pos}
                </Box>
                <h2><u>Translations:</u></h2>
                {
                  definition.tr.map((t, i) => {
                    console.log('TRANSLATION');
                    console.log(t);
                    return (
                      <SpaceBetween direction="vertical" size="s">
                        <Box variant="awsui-key-label" color="inherit">
                          {`${i + 1}) Translated text:`}
                        </Box>
                        <Box variant="p" color="inherit">
                          {t.text}
                        </Box>
                        <Box variant="awsui-key-label" color="inherit">
                          Part of speech:
                        </Box>
                        <Box variant="p" color="inherit">
                          {t.pos}
                        </Box>
                        <Box variant="awsui-key-label">
                          {
                            t.gen
                            ?
                            `Gender: ${t.gen}`
                            :
                            'No gender information to display'
                          }
                        </Box>
                        <Box variant="awsui-key-label">
                          Synonyms:
                        </Box>
                        {
                          t.syn
                          ?
                          t.syn.map((s, i) => {
                            console.log('SYNONYM');
                            console.log(s);
                            return (
                              <SpaceBetween direction="vertical" size="s">
                                <li key={`_key_${i}`}>{s.text}</li>
                              </SpaceBetween>
                            )
                          })
                          :
                          'No synonyms to display'
                        }
                        <Box variant="awsui-key-label">
                          Meanings:
                        </Box>
                        {
                          t.mean
                          ?
                          t.mean.map((m, i) => {
                            return (
                              <SpaceBetween direction="vertical" size="s">
                                <li key={`_key_${i}`}>{m.text}</li>
                              </SpaceBetween>
                            )
                          })
                          :
                          'No meanings to display'
                        }
                        <Box variant="awsui-key-label">
                          Examples:
                        </Box>
                        {
                          t.ex
                          ?
                          t.ex.map((e, i) => {
                            console.log('🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥');
                            return (
                              <SpaceBetween direction="vertical" size="s">
                                <li key={`_key_${i}`}>{e.text}</li>
                              </SpaceBetween>
                            )
                          })
                          :
                          'No examples to display'
                        }
                        <br/>
                        <hr/>
                        <br/>
                      </SpaceBetween>
                    )
                  })
                }
              </SpaceBetween>
            )
          })}
        </Container>
      </SpaceBetween>
    </Container>
  )
}