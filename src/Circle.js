import React from 'react';

const Circle = (props) => {
    return (
        // <div className={`circle ${props.color}`}><p>{props.id} </p>
        <div 
        style={{backgroundColor:props.color,
        pointerEvents:props.disabled ? "auto" : "none"}} 
        className={` circle ${props.active? "active" : ""}`} 
        onClick={props.click}>
        </div>
    );
};

export default Circle;