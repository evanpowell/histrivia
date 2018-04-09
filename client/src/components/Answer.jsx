import React from 'react';
import axios from 'axios';

const Answer = (props) => {
  if(props.answer.isAnswered) {
    console.log(props.answer);
    let gifUrl = '';
    if (props.answer.isCorrect) {
      console.log('this is totally right');
      axios.get('https://yesno.wtf/api?force=yes')
        .then(result => {
          console.log(result);
        })
      return (
        <div className="answer">
          <h1>You got it right!</h1>
        </div>
      );
    } else {
      return (
        <div className="answer">
          <h1>WRONG!</h1>
        </div>
      );
    }
  } else  {
    return <div style={{display: 'none'}}></div>;
  }
}

export default Answer;