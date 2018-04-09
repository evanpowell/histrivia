import React from 'react';
import axios from 'axios';

const Answer = (props) => {
  if(props.answer.isAnswered) {
    return (
      <div className="answer">
        <img src={props.answer.gifUrl} />
      </div>
    );
  } else  {
    return <div style={{display: 'none'}}></div>;
  }
}

export default Answer;