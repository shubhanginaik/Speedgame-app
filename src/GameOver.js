import React from 'react';


const GameOver = (props) => {
    const closeHandler =()=>{
        window.location.reload();
    }
    return (
        <div className="overlay">
            <div className="popup">
            <button onClick={closeHandler}><span>X</span></button>
            <h2>Game over</h2>
            <p>Your score was : {props.score}</p>
            </div>
            
        </div>
    );
};

export default GameOver;