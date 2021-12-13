import React from 'react';


const GameOver = (props) => {
   const appraise = <p>It is a Great score</p>
    return (
        <div className="overlay">
            <div className="popup">
            <button onClick={props.close}><span>X</span></button>
            <h2>Game over</h2>
            <p>Your score was : {props.score}</p>
           {props.score>=100 ? appraise :''}
            </div>
            
        </div>
    );
};

export default GameOver;