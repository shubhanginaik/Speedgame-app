
import React, { Component } from 'react';
import './App.css'
import Circle from './Circle';
import {circles} from './circles'

class App extends Component {
  state={
    score:0,
  }
  render() {

    return (
        <div className="App">
        <h1>Speedgame</h1>
        <p>Your game score is: {this.state.score}</p>
        <div className="circles">
          {circles.map((c) => (
            <Circle key={c.id} color={c.color} id={c.id}/> 
          ))}
        </div>
        <div className="button">
        <button className="start">Start</button>
        <button className="stop">Stop</button>
        </div>
    </div>
      
    );
  }
}

export default App;