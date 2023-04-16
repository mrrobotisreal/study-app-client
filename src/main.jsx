import React from 'react';
import { IntlProvider } from 'react-intl';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
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
import ViewFlashcardTimes from './ViewFlashcardTimes';
import ViewMessages from './ViewMessages';
import "@cloudscape-design/global-styles/index.css"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
