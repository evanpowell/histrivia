import React from 'react';

const Answer = (props) => {
  if(props.answer.isAnswered) {
    console.log(props.answer);
    if (props.answer.isCorrect) {
      console.log('this is totally right');
      return (
        <div>
          <h1>You got it right!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>WRONG!</h1>
        </div>
      );
    }
  } else  {
    return <div style={{display: 'none'}}></div>;
  }
}

export default Answer;