import React from 'react';

const GameOver = (props) => {
    const closeHandler =()=>{
        window.location.reload();
    }
    return (
        <div className="overlay">
            <div className="popup">
            <button onClick={closeHandler}>X</button>
            <h1>Game over</h1>
            <p>
                Your score was:{props.score}
                
            </p>
            </div>
            
        </div>
    );
};

export default GameOver;