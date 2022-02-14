
import React, { Component } from 'react';
import './App.css'
import Circle from './Circle';
import {circles} from './circles'
import GameOver from './GameOver';
import endSound from "./assets/sounds/clickSound.wav"

 let clickSound = new Audio(endSound);


const getRndInteger = (min, max) =>{
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

class App extends Component {
  state={
    score: 0 ,
    current:0,
    gameOver:false,
    pace: 1500,
    rounds:0,
    gameStart: false,
    gameStop: true,
  }
  
  timer = undefined;

  clickPlay = () =>{
    if(clickSound.paused){
      clickSound.play();
    } else {
      clickSound.currentTime = 0;
    }
  }
  

  clickHandler = (id) =>{
    this.clickPlay();
    //console.log("you have clicked",id)
    
    if(this.state.current !== id){
      this.stopHandler();
      return;
    }
    this.setState({
      score:this.state.score + 10,
      rounds: 0,
    })
  }

  nextcircle = () =>{
    if(this.state.rounds >= 5){
      this.stopHandler();
      return;
    }
    let nextActive;
    do{
      nextActive = getRndInteger(1,4)
    }while(nextActive === this.state.current)
    this.setState({
      current : nextActive,
      pace:this.state.pace * 0.95,
      rounds: this.state.rounds + 1
    });
    
    this.timer = setTimeout(this.nextcircle, this.state.pace);
    console.log("active circle is : ", this.state.current)
    console.log('round number is:',this.state.rounds)
  }
  startHandler = () =>{
    this.nextcircle();
    this.setState({
      gameStart: true,
      gameStop: false,
    })
  }
  stopHandler = () =>{
    clearTimeout(this.timer);
    this.setState({
      gameOver:true,
      current:0,
      pace: 1500,
      gameStart: false,
      gameStop: true,
    })
  };
  closeHandler = () =>{
    this.setState({
      gameOver:false,
      score: 0,
      pace: 1500,
      rounds: 0,
    })
  }
  render() {

    return (
        <div className="App">
        <h1>Speedgame</h1>
        <p>Your game score is : {this.state.score}</p>
        <div className="circles">
          {circles.map((c) => (
            <Circle 
            key={c.id} 
            color={c.color} 
            id={c.id} 
            click={() =>this.clickHandler(c.id)}
            active= {this.state.current === c.id}
            disabled={this.state.gameStart}/> 
          ))}
        </div>
        <div className="button">
        <button  
        disabled= {this.state.gameStart} 
        className="start" 
        onClick={this.startHandler}
        ><span>Start</span>
        </button>
        <button 
        disabled={this.state.gameStop}
        className="stop" 
        onClick={this.stopHandler}
        ><span>Stop</span>
        </button>
        {this.state.gameOver && <GameOver score={this.state.score} close={this.closeHandler} />}
        </div>
    </div>
      
    );
  }
}

export default App;