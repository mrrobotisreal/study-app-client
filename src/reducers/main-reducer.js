import { createStore } from 'redux';
import Flashcards from '../Flashcards';
// import useGetCollections from '../hooks/useGetCollections';

const initState = {
  cardCollections: [],
  user: {},
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case 'setUserInfo':
      return {
        ...state,
      }
    case 'setCardCollections':
      return {
        ...state,
      }
    default:
      return {
        ...state,
      }
  }
}

// store.subscribe(() => {
//   console.log('state updated');
//   console.log(store.getState());
// })

// const todoAction = { type: 'ADD_TODO', todo: 'buy milk' };

// store.dispatch(todoAction);