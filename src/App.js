import React, { Component } from 'react';
import './App.css';
import { createStore, combineReducers } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const initialMovies = {
  listName: 'Favourite',
  list: [
    'Rambo III', 'Hakerzy', 'Matrix'
  ]
}

const initialActors = {
  listName: 'Best',
  list: [
    'Tom Hanks', 'Julia Roberts', 'Angelina Jolie'
  ]
}

const initialStories = {
  listName: 'The Best',
  list: [
    'Kubus', 'Toys', 'Gdzie jest Nemo'
  ]
}

function movies(state = initialMovies, action) {
  switch (action.type) {
    case 'ADD_MOVIES':
      return {
        ...state, list: [...state.list, action.item]
      }
    case 'RESET_MOVIES':
      return {
        ...state, list: []
      }
    default:
      return state
  }
}

function actors(state = initialActors, action)
{
  switch (action.type) {
    case 'ADD_ACTORS':
      return {
        ...state, list: [...state.list, action.item]
      }
    case 'RESET_ACTORS':
      return {
        ...state, list: []
      }
    default:
      return state
  }
}

function stories (state = initialStories, action)
{
  switch (action.type) {
    case 'ADD_STORIES':
    return {
      ...state, list: [...state.list, action.item]
    }
    case 'RESET_ACTORS':
      return {
        ...state, list: []
      }
    default:
      return state
    
  }
}

const reducer = combineReducers({movies, actors, stories })

const store = createStore(reducer, composeWithDevTools())
window.store = store

class App extends Component {
  render() {
    return (
      <div>
        Testowanie Redux
      </div>
    );
  }
}
export default App;