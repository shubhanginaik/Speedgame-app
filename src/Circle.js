import React from 'react';

const Circle = (props) => {
    return (
        // <div className={`circle ${props.color}`}><p>{props.id} </p>
        <div 
        style={{backgroundColor:props.color}} 
        className="circle" 
        onClick={props.click}><p>{props.id}  </p>
        </div>
    );
};

export default Circle;