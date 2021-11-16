import React from 'react';


const GameOver = (props) => {
   
    return (
        <div className="overlay">
            <div className="popup">
            <button onClick={props.close}><span>X</span></button>
            <h2>Game over</h2>
            <p>Your score was : {props.score}</p>
            </div>
            
        </div>
    );
};

export default GameOver;