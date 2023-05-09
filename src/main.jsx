import React from 'react';
import { IntlProvider } from 'react-intl';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import _App from './_App';
import App from './App';
import Chat from './Chat';
import CreateCollection from './CreateCollection';
import ErrorPage from './ErrorPage';
import Flashcards from './Flashcards';
import FlashStudy from './FlashStudy';
import Videos from './Videos';
import Scheduler from './Scheduler';
import Stats from './Stats';
import Docs from './Docs';
import Dictionary from './Dictionary';
import Translator from './Translator';
import ViewFlashcardTimes from './ViewFlashcardTimes';
import ViewMessages from './ViewMessages';
import LoginPage from './LoginPage';
import TextsTable from './TextsTable';
import TextReader from './TextReader';
import "@cloudscape-design/global-styles/index.css"
import 'dotenv';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/main-reducer.js';
import { UserContextProvider } from './context/UserContext';
import { NotificationsContextProvider } from './context/NotificationsContext';
import { ScoresContextProvider } from './context/ScoresContext';

export const store = createStore(reducer);
const FlashcardsSubscription = store.subscribe(Flashcards);

const router = createBrowserRouter([
  {
    path: '/',
    element: <_App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/app/collections',
        element: <Flashcards/>
      },
      {
        path: '/app/collections/study',
        element: <FlashStudy/>
      },
      {
        path: '/app/collections/study/:name',
        element: <FlashStudy/>
      },
      {
        path: '/app/chat',
        element: <Chat/>
      },
      {
        path: '/videos',
        element: <Videos/>
      },
      // {
      //   path: '/videos/russian-phrases',
      //   element: <Video video={videoPath[]}/>
      // }
      {
        path: '/app/collections/new',
        element: <CreateCollection/>
      },
      {
        path: '/schedule',
        element: <Scheduler/>
      },
      {
        path: '/stats',
        element: <Stats/>
      },
      {
        path: '/docs',
        element: <Docs/>
      },
      {
        path: '/dict',
        element: <Dictionary/>,
      },
      {
        path: '/view-flashcard-times',
        element: <ViewFlashcardTimes/>
      },
      {
        path: '/view-messages',
        element: <ViewMessages/>
      },
      {
        path: '/translate',
        element: <Translator/>
      },
      {
        path: '/texts-table',
        element: <TextsTable/>
      },
      {
        path: '/texts/:text',
        element: <TextReader/>
      }
    ]
  },
  // {
  //   path: '/blah',
  //   element: <LoginPage/>,
  //   errorElement: <ErrorPage/>,
  // }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GCLIENT_ID}>
    <ScoresContextProvider>
      <NotificationsContextProvider>
        <UserContextProvider>
          <Provider store={store}>
              <RouterProvider router={router} />
          </Provider>
        </UserContextProvider>
      </NotificationsContextProvider>
    </ScoresContextProvider>
  </GoogleOAuthProvider>
)
