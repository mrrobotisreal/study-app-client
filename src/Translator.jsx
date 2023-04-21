import { useState, useEffect } from 'react';
import Autosuggest from '@cloudscape-design/components/autosuggest';
import Box from '@cloudscape-design/components/box';
import Button from '@cloudscape-design/components/button';
import ColumnLayout from '@cloudscape-design/components/column-layout';
import Container from '@cloudscape-design/components/container';
import Input from '@cloudscape-design/components/input';
import Header from '@cloudscape-design/components/header';
import Select from '@cloudscape-design/components/select';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Toggle from '@cloudscape-design/components/toggle';
import { FormattedMessage } from 'react-intl';
import useTranslate from './hooks/useTranslate';

const languages = {
  'ar': 'Arabic',
  'zh': 'Chinese (CN)',
  'zh-TW': 'Chinese (TW)',
  'en': 'English',
  'en-US': 'English (US)',
  'fr': 'French',
  'de': 'German',
  'el': 'Greek',
  'he': 'Hebrew',
  'hi': 'Hindi',
  'it': 'Italian',
  'ja': 'Japanese',
  'ko': 'Korean',
  'ru': 'Russian',
  'es': 'Spanish',
  'vi': 'Vietnamese',
};

const languageOptions = [
  { value: 'ar', label: 'Arabic' },
  { value: 'zh', label: 'Chinese (CN)' },
  { value: 'zh-TW', label: 'Chinese (TW)' },
  { value: 'en', label: 'English' },
  { value: 'en-US', label: 'English (US)' },
  { value: 'fr', label: 'French' },
  { value: 'de', label: 'German' },
  { value: 'el', label: 'Greek' },
  { value: 'he', label: 'Hebrew' },
  { value: 'hi', label: 'Hindi' },
  { value: 'it', label: 'Italian' },
  { value: 'ja', label: 'Japanese' },
  { value: 'ko', label: 'Korean' },
  { value: 'ru', label: 'Russian' },
  { value: 'es', label: 'Spanish' },
  { value: 'vi', label: 'Vietnamese' },
];

// const languageOptions = [
//   { value: 'ar' },
//   { value: 'zh' },
//   { value: 'zh-TW' },
//   { value: 'en' },
//   { value: 'en-US' },
//   { value: 'fr' },
//   { value: 'de' },
//   { value: 'el' },
//   { value: 'he' },
//   { value: 'hi' },
//   { value: 'it' },
//   { value: 'ja' },
//   { value: 'ko' },
//   { value: 'ru' },
//   { value: 'es' },
//   { value: 'vi' },
// ];

export default function Translator() {
  const [sourceLang, setSourceLang] = useState(window.navigator.language);
  // const [sourceLangText, setSourceLangText] = useState(languages[window.navigator.language]);
  const [targetLang, setTargetLang] = useState(null);
  // const [targetLangText, setTargetLangText] = useState(null);
  const [textToBeTranslated, setTextToBeTranslated] = useState('');
  const [isFormal, setIsFormal] = useState(false);
  const [allowProfanity, setAllowProfanity] = useState(false);
  const { translatedText, translateText } = useTranslate();

  const handleSourceLang = ({ detail }) => setSourceLang(detail.selectedOption);

  const handleTargetLang = ({ detail }) => setTargetLang(detail.selectedOption);

  const handleTextToBeTranslated = ({ detail }) => setTextToBeTranslated(detail.value);

  const handleIsFormal = ({ detail }) => setIsFormal(detail.checked);

  const handleAllowProfanity = ({ detail }) => setAllowProfanity(detail.checked);

  const handleTranslateText = () => {
    console.log('Will fire off to Amazon Translate');
    translateText(textToBeTranslated, sourceLang.value, targetLang.value);
    // translateText(textToBeTranslated, 'en', 'vi')
  };

  return (
    <SpaceBetween direction="vertical" size="s">
      <Container
        header={
          <Header
            variant="h1"
            description={
              <FormattedMessage
                id="translator.header.description"
                defaultMessage="First, you may optionally change the source language, however, it will use whatever your browser's preferred language is set to by default. Next, you <b>must</b> select your target language you wish to translate your text to. Then, input the text you wish to translate below in the input area, then select whether or not you wish to have a formal or informal response, then you may optionally allow text containing profanity to be translated, and finally click the <code>Translate</code> button."
                description=""
                values={{
                  b: (chunks) => <b>{chunks}</b>,
                  code: (chunks) => <code>{chunks}</code>
                }}
              />
            }
          >
            <FormattedMessage
              id="translator.header"
              defaultMessage="Translator"
              description=""
            />
          </Header>
        }
      >
        <SpaceBetween direction="vertical" size="s">
          <Header
            variant="h3"
            description={
              <FormattedMessage
                id="translator.content.header.sourceLangAutosuggest.description"
                defaultMessage="This is the language being used in the text you wish to translate. By default this is set to your browser's preferred language, but you may change it and translate from other languages as well."
                description=""
              />
            }
          >
            <FormattedMessage
              id="translator.content.header.sourceLangAutosuggest"
              defaultMessage="Source language"
              description=""
            />
          </Header>
          {/* <Autosuggest
            onChange={handleSourceLang}
            value={sourceLang}
            options={languageOptions}
            enteredTextLabel={sourceLang => `Using ${languages[sourceLang]} as the source language`}
            ariaLabel="Source language autosuggest"
            placeholder="Source language"
            empty="No matches found"
          /> */}
          <Select
            onChange={handleSourceLang}
            selectedOption={sourceLang}
            options={languageOptions}
          />
          <Header
            variant="h3"
            description={
              <FormattedMessage
                id="translator.content.header.targetLangAutosuggest.description"
                defaultMessage="This is the language that the user supplied text content will be translated into."
                description=""
              />
            }
          >
            <FormattedMessage
              id="translator.content.header.targetLangAutosuggest"
              defaultMessage="Target language"
              description=""
            />
          </Header>
          {/* <Autosuggest
            onChange={handleTargetLang}
            value={targetLang}
            options={languageOptions}
            enteredTextLabel={targetLang => `Using ${languages[targetLang]} as the target language`}
            ariaLabel="Target language autosuggest"
            placeholder="Target language"
            emtpy="No matches found"
          /> */}
          <Select
            onChange={handleTargetLang}
            selectedOption={targetLang}
            options={languageOptions}
          />
          <Header
            variant="h3"
          >
            <FormattedMessage
              id="translator.content.header.textToBeTranslated"
              defaultMessage="Text to be translated"
              description=""
            />
          </Header>
          <Input
            onChange={handleTextToBeTranslated}
            value={textToBeTranslated}
            placeholder="Enter the text you wish to translate here"
            spellcheck
          />
          <Header
            variant="h3"
          >
            <FormattedMessage
              id="translator.content.header.additionalOptions"
              defaultMessage="Additional options"
              description=""
            />
          </Header>
          <Toggle
            onChange={handleIsFormal}
            checked={isFormal}
          >
            <FormattedMessage
              id="translator.content.toggle.isFormal"
              defaultMessage="Use formal responses"
              description=""
            />
          </Toggle>
          <Toggle
            onChange={handleAllowProfanity}
            checked={allowProfanity}
          >
            <FormattedMessage
              id="translator.content.toggle.allowProfanity"
              defaultMessage="Allow profanity"
              description=""
            />
          </Toggle>
          <Button
            onClick={handleTranslateText}
            variant="primary"
          >
            <FormattedMessage
              id="translator.content.button.translate"
              defaultMessage="Translate"
              description=""
            />
          </Button>
        </SpaceBetween>
      </Container>
      {!translatedText
        ? null
        : (
          <Container
            header={
              <Header
                variant="h1"
              >
                <FormattedMessage
                  id="translator.content.result.container.header"
                  defaultMessage="Translation result"
                  description=""
                />
              </Header>
            }
          >
            <ColumnLayout columns={2}>
              <Container>
                <Header
                  variant="h3"
                >
                  <FormattedMessage
                    id="translator.content.result.container.content.header.sourceLang"
                    defaultMessage="Source language:"
                    description=""
                  />
                </Header>
                <Box
                  varaint="p"
                >
                  {sourceLang.label}
                </Box>
                <Header
                  variant="h3"
                >
                  <FormattedMessage
                    id="translator.content.result.container.content.header.textToBeTranslated"
                    defaultMessage="Text to be translated:"
                    description=""
                  />
                </Header>
                <Box
                  varaint="p"
                >
                  {textToBeTranslated}
                </Box>
              </Container>
              <Container>
                <Header
                  variant="h3"
                >
                  <FormattedMessage
                    id="translator.content.result.container.content.header.targetLang"
                    defaultMessage="Target language:"
                    description=""
                  />
                </Header>
                <Box
                  varaint="p"
                >
                  {targetLang.label}
                </Box>
                <Header
                  variant="h3"
                >
                  <FormattedMessage
                    id="translator.content.result.container.content.header.translatedText"
                    defaultMessage="Translated text:"
                    description=""
                  />
                </Header>
                <Box
                  varaint="p"
                >
                  {translatedText}
                </Box>
              </Container>
            </ColumnLayout>
          </Container>
        )
      }
    </SpaceBetween>
  );
};