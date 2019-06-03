import React, { Component } from 'react'
import './App.css'
import { createStore } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers'

const store = createStore(rootReducer, composeWithDevTools())
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