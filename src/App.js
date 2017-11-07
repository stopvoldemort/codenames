import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import GameContainer from './components/game/GameContainer'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <GameContainer />
      </div>
    );
  }
}

export default App;
