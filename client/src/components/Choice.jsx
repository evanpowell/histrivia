import React from 'react';

const Choice = (props) => {
  const style = {
    marginBottom: '1rem'
  }
  return (
    <div className="choice">
      <button className="btn" style={style} onClick={()=>{props.handleAnswer(props.answer.correct)}}>{props.answer.answer}</button>
    </div>
  );
};

export default Choice;