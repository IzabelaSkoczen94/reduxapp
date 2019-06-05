import React, { Component } from 'react'
import MoviesContainer from './app/movies/components/MoviesContainer'
import MoviesForm from './app/movies/components/MoviesForm'


class App extends Component {
  render() {
    return (
      <div> 
        Testowanie Redux
        <MoviesContainer/>
        <MoviesForm/>
      </div>
    );
  }
}
export default App;