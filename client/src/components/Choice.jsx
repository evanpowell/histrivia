import React from 'react';

const Choice = (props) => {
  return (
    <div>
      <button onClick={()=>{props.handleAnswer(props.answer.correct)}}>{props.answer.answer}</button>
    </div>
  );
};

export default Choice;