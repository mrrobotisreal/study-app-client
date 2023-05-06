import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSaveCollection } from './hooks/useSaveCollection';
import axios from 'axios';
import Alert from '@cloudscape-design/components/alert';
import Button from '@cloudscape-design/components/button';
import Container from '@cloudscape-design/components/container';
import Form from '@cloudscape-design/components/form';
import FormField from '@cloudscape-design/components/form-field';
import Header from '@cloudscape-design/components/header';
import Input from '@cloudscape-design/components/input';
import Link from '@cloudscape-design/components/link';
import Select from '@cloudscape-design/components/select';
import SpaceBetween from '@cloudscape-design/components/space-between';
import TextArea from '@cloudscape-design/components/textarea';
import { AppContext } from './AppContext';
import AudioRecorder from './AudioRecorder';
import { FormattedMessage } from 'react-intl';

const categoryOptionsList = [
  {
    label: (
      <FormattedMessage
        id="createCollection.categories.greetings"
        defaultMessage="Greetings"
        description=""
      />
    ),
    value: 'Greetings',
  },
  {
    label: (
      <FormattedMessage
        id="createCollection.categories.family"
        defaultMessage="Family"
        description=""
      />
    ),
    value: 'Family',
  },
  {
    label: (
      <FormattedMessage
        id="createCollection.categories.news"
        defaultMessage="News"
        description=""
      />
    ),
    value: 'News',
  },
  {
    label: (
      <FormattedMessage
        id="createCollection.categories.locations"
        defaultMessage="Locations"
        description=""
      />
    ),
    value: 'Locations',
  },
  {
    label: (
      <FormattedMessage
        id="createCollection.categories.work"
        defaultMessage="Work"
        description=""
      />
    ),
    value: 'Work',
  },
  {
    label: (
      <FormattedMessage
        id="createCollection.categories.technology"
        defaultMessage="Technology"
        description=""
      />
    ),
    value: 'Technology',
  },
  {
    label: (
      <FormattedMessage
        id="createCollection.categories.health"
        defaultMessage="Health"
        description=""
      />
    ),
    value: 'Health',
  }
];

export default function CreateCollection() {
  const [collection, setCollection] = useState({});
  const [cards, setCards] = useState([]);
  const [collectionName, setCollectionName] = useState('');
  const [categoryOptions, setCategoryOptions] = useState(categoryOptionsList);
  const [selectedCategory, setSelectedCategory] = useState({label: '-', value: '-'});
  // const [category, setCategory] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isValidated, setIsValidated] = useState(true);
  const [textAreaText, setTextAreaText] = useState('');
  const navigate = useNavigate();
  const { prefLang, langTexts, localize } = useContext(AppContext);
  // text lang state
  const [createCollectionHeader, setCreateCollectionHeader] = useState('Create a new collection');

  useEffect(() => {
    console.log('updating...');
    console.log(langTexts['create-collection-header']);
    console.log('AFTER');
    // const interval = setInterval(async () => {
    //   console.log('INTERVAL');
    //   console.log('-----------------------------------------------------');
    //   console.log('CREATE COLLECTION HEADER');
    //   console.log(langTexts['create-collection-header']);
    //   console.log('MAIN MENU');
    //   console.log(langTexts['main-menu']);
    //   await setCreateCollectionHeader(langTexts['create-collection-header']);
    // }, [1000]);
    // return () => {
    //   clearInterval(interval);
    // }
  }, []);

  useEffect(() => {
    setCreateCollectionHeader(langTexts['create-collection-header']);
  }, [langTexts]);

  const handleAddCard = () => {
    if (question === '' || answer === '') {
      setIsValidated(false);
      return;
    }
    const card = {
      question,
      answer,
    }
    console.log('CARD:');
    console.log(card);
    setCards((cards) => [...cards, card]);
    setQuestion('');
    setAnswer('');
  };

  const handleCancelCollection = () => {
    console.log('CARDS');
    console.log(cards);
    // navigate('/app/collections');
  };

  const handleSubmitCollection = () => {
    // if (collectionName === '' || selectedCategory.label === '-') {
    //   setIsValidated(false);
    //   return;
    // }
    let collParams = {
      name: collectionName,
      category: selectedCategory.label,
      cardList: cards,
      username: 'iamwintrow10',
    };
    setCollection(collParams);
    console.log(collParams)
    console.log('COLLECTION');
    console.log(localize('main-menu'));
    useSaveCollection(collParams);
    // axios.get('http://localhost:3333/app/collections/i/am/fart/v2')
    //   .then(({ data }) => {
    //     console.log('yummy in my promise tummy')
    //   })
    //   .catch((err) => console.error(err))
    navigate('/app/collections');
  }

  const handlePushNotifications = () => {
    Notification.requestPermission()
      .then(perm => {
        if (perm === 'granted') {
          new Notification('Example notification', {
            body: 'This is some more text'
          });
        }
      })
      .catch((err) => console.error(err));
    // if (!('serviceWorker' in navigator)) {
    //   // Service workers are not supported
    //   console.log('Service workers are not supported');
    //   return;
    // }
    // if (!('PushManager' in window)) {
    //   // the Push API is not supported
    //   console.log('the Push API is not supported');
    //   return;
    // }
    // navigator.serviceWorker.register('/worker.js')
    //   .then((registration) => {
    //     console.log('Service worker registration completed with scope:\n', registration.scope);
    //   })
    //   .catch((err) => console.error(err));
  }

  return (
    <Container
      header={
        <Header
          description={
            <FormattedMessage
              id="createCollection.header.description"
              defaultMessage="Enter a name for your collection, select a category that best fits the content of the cards you wish to add, and then begin adding cards below! Clicking the <code>Submit</code> collection button will save your collection and all cards that were added to it. Clicking the <code>Cancel</code> button will return you to the previous page and any cards that were added to the collection will not be saved."
              description=""
              values={{
                code: chunks => <code>{chunks}</code>
              }}
            />
          }
          info={
            <Link variant="info">
              <FormattedMessage
                id="createCollection.header.infoLink"
                defaultMessage="Info"
                description=""
              />
            </Link>
          }
          counter={
            cards.length === 1
            ?
            <FormattedMessage
              id="createCollection.cardCount.singleText"
              defaultMessage="{cardNum} card"
              description=""
              values={{
                cardNum: cards.length,
              }}
            />
            :
            <FormattedMessage
              id="createCollection.cardCount.pluralText"
              defaultMessage="{cardNum} cards"
              description=""
              values={{
                cardNum: cards.length,
              }}
            />
          }
        >
          <FormattedMessage
            id="createCollection.header.title"
            defaultMessage="Create a new collection"
            description=""
          />
        </Header>
      }
    >
      <Form
        actions={
          <SpaceBetween
            direction="horizontal"
            size="l"
          >
            <Button onClick={handlePushNotifications}>
              <FormattedMessage
                id="createCollection.cancelButton"
                defaultMessage="Cancel"
                description=""
              />
            </Button>
            <Button onClick={handleSubmitCollection} variant="primary">
              <FormattedMessage
                id="createCollection.submitButton"
                defaultMessage="Submit collection"
                description=""
              />
            </Button>
          </SpaceBetween>
        }
      >
        <SpaceBetween
          direction="vertical"
          size="l"
        >
          <FormField label={
            <FormattedMessage
              id="createCollection.collectionNameInput"
              defaultMessage="Collection name"
              description=""
            />
          }>
            <Input
              onChange={({ detail }) => setCollectionName(detail.value)}
              value={collectionName}
              placeholder="Enter the name for your collection here..."
            />
          </FormField>
          <FormField label={
            <FormattedMessage
              id="createCollection.categoryInput"
              defaultMessage="Category"
              description=""
            />
          }>
            <Select
              selectedOption={selectedCategory}
              onChange={({ detail }) => setSelectedCategory(detail.selectedOption)}
              options={categoryOptions}
              selectedAriaLabel={selectedCategory}
            />
          </FormField>
          <FormField label={
            <FormattedMessage
              id="createCollection.descriptionInput"
              defaultMessage="Description"
              description=""
            />
          }>
            <TextArea
              onChange={({ detail }) => setTextAreaText(detail.value)}
              value={textAreaText}
              placeholder="Write a description for this collection..."
            />
          </FormField>
        </SpaceBetween>
        <br/>
        <SpaceBetween
          direction="vertical"
          size="l"
        >
          <Container
            header={
              <>
                {/* {
                  isValidated
                  ?
                  <Alert
                    type="warning"
                    header={<b>Минутку!</b>}
                    dismissible
                    onDismiss={({ detail }) => setIsValidated(true)}
                  >
                    You need a question <i>and</i> an answer before you can add a card. Please enter a question and an answer then try again.
                  </Alert>
                  :
                  null
                } */}
                <Header
                  description={
                    <FormattedMessage
                      id="createCollection.addCards.description"
                      defaultMessage="Enter a question and an answer, then click the <code>Add card</code> button. Your card will then be added to the collection, and the inputs will be refreshed so you can continue adding as many cards as you like."
                      description=""
                      values={{
                        code: chunks => <code>{chunks}</code>
                      }}
                    />
                  }
                >
                  <FormattedMessage
                    id="createCollection.addCards.title"
                    defaultMessage="Add cards"
                    description=""
                  />
                </Header>
              </>
            }
          >
            <SpaceBetween
              direction="vertical"
              size="l"
            >
              <FormField label={
                <FormattedMessage
                  id="createCollection.addCards.recordAudio"
                  defaultMessage="Record audio"
                  description=""
                />
              }>
                <AudioRecorder/>
              </FormField>
              <FormField label={
                <FormattedMessage
                  id="createCollection.addCards.question"
                  defaultMessage="Question"
                  description=""
                />
              }>
                <Input
                  onChange={({ detail }) => {
                    setIsValidated(true);
                    setQuestion(detail.value);
                  }}
                  value={question}
                  placeholder="Enter your question here..."
                />
              </FormField>
              <FormField label={
                <FormattedMessage
                  id="createCollection.addCards.answer"
                  defaultMessage="Answer"
                  description=""
                />
              }>
                <Input
                  onChange={({ detail }) => {
                    setIsValidated(true);
                    setAnswer(detail.value);
                  }}
                  value={answer}
                  placeholder="Enter your answer here..."
                />
              </FormField>
              {
                  !isValidated
                  ?
                  <Alert
                    type="warning"
                    header={<b>Минутку!</b>}
                    dismissible
                    onDismiss={({ detail }) => setIsValidated(true)}
                  >
                    {'You need a question'}{' '}<i>and</i>{' '}{'an answer before you can add a card. Please enter a question and an answer then try again.'}
                  </Alert>
                  :
                  null
                }
              <Button variant="primary" onClick={handleAddCard}>
                <FormattedMessage
                  id="createCollection.addCards.addCardButton"
                  defaultMessage="Add card"
                  description=""
                />
              </Button>
            </SpaceBetween>
          </Container>
        </SpaceBetween>
      </Form>
    </Container>
  );
}


// {
//   "_id" : ObjectId("63f0680e02ea81ac1b62cfff"),
//   "email" : "90mitchwintrow@gmail.com",
//   "username" : "mwintrow",
//   "password" : "$2a$14$d1SSCvQEf1wzhSP/P4II9eMua3AUQ.QaTNf1uLaaryh77LDhPQsgi",
//   "jwt" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im13aW50cm93IiwiZW1haWwiOiI5MG1pdGNod2ludHJvd0BnbWFpbC5jb20ifQ.snjbuD4iZ8PdI8aTl5XC54WHU-XJ09KDNnDotRnAbtY",
//   "collections" : [
//     { "name" : "Funzees", "category" : "Recreation", "cardList" : [
//         { "question" : "Who am I?", "answer" : "Me! Duh" },
//         { "question" : "Where am I?", "answer" : "Seattle" },
//         { "question" : "What am I?", "answer" : "Human" },
//         { "question" : "What is Sadie's name?", "answer" : "Sadie! Duh" },
//         { "question" : "Is the X-Files show awesome?", "answer" : "Yes, of course it is." },
//         { "question" : "Is the Expeditionary Force audiobook series any good?", "answer" : "It is friggin amazing!!!" },
//         { "question" : "When was America born?", "answer" : "1776" },
//         { "question" : "Whom do I like?", "answer" : "Алина" },
//         { "question" : "I don't know what to put here", "answer" : "This is the answer for whatever I put in the question" },
//         { "question" : "Dude", "answer" : "Where's my car?" },
//         { "question" : "Brooooo", "answer" : "Duuuuudddeeeee" }
//       ]
//     },
//     { "name" : "Stinky", "category" : "Greetings", "cardList" : [
//         { "question" : "Is this stinky?", "answer" : "Yep, sure is!" },
//         { "question" : "Hmmm", "answer" : "Interesting" },
//         { "question" : "You're everywhere", "answer" : "to me!" },
//         { "question" : "Blah", "answer" : "blah blah...." }
//       ]
//     }
//   ]
// }