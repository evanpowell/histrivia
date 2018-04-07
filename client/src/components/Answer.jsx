import React from 'react';

const Answer = (props) => {
  return (
    <div>
      <button onClick={()=>{props.handleAnswer(props.answer.correct)}}>{props.answer.answer}</button>
    </div>
  );
};

export default Answer;