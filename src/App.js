
import React, { Component } from 'react';
import './App.css'
import Circle from './Circle';
import {circles} from './circles'
import GameOver from './GameOver';

const getRndInteger = (min, max) =>{
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

class App extends Component {
  state={
    score: 0 ,
    current:0,
    gameOver:false,
  }
  timer = undefined;
  pace = 1500;

  clickHandler = () =>{
    this.setState({
      score:this.state.score + 10,
    })
  }

  nextcicle = () =>{
    let nextActive;
    do{
      nextActive = getRndInteger(1,4)
    }while(nextActive === this.state.current)
    this.setState({
      current : nextActive,
    });
    this.pace *= 0.95
    this.timer = setTimeout(this.nextcicle, this.pace);
    console.log("active circle is : ", this.state.current)
  }
  startHandler = () =>{
    this.nextcicle();
  }
  stopHandler = () =>{
    clearTimeout(this.timer);
    this.setState({
      gameOver:true,
    })
  };
  render() {

    return (
        <div className="App">
        <h1>Speedgame</h1>
        <p>Your game score is: {this.state.score}</p>
        <div className="circles">
          {circles.map((c) => (
            <Circle 
            key={c.id} 
            color={c.color} 
            id={c.id} 
            click={this.clickHandler}
            active= {this.state.current === c.id}/> 
          ))}
        </div>
        <div className="button">
        <button className="start" onClick={this.startHandler}>Start</button>
        <button className="stop" onClick={this.stopHandler}>Stop</button>
        {this.state.gameOver && <GameOver score={this.state.score} />}
        </div>
    </div>
      
    );
  }
}

export default App;