import React from 'react';
import Choice from './Choice.jsx';

const Question = (props) => {
  const {prompt, answer} = props;
  if (prompt.question && !answer.isAnswered) {
    const incorrect = prompt.incorrect_answers.map((answer) => {
      return {answer: answer, correct: false};
    });
    const answers = [...incorrect, {answer: prompt.correct_answer, correct: true}];
    const randomAnswers = [];
    while (answers.length) {
      let randomIndex = Math.floor(Math.random() * answers.length);
      randomAnswers.push(answers.splice(randomIndex, 1)[0]);
    }
    return (
      <div>
        <h3>{prompt.question}</h3>
        {randomAnswers.map((answer, index) => {
          return <Choice key={index} handleAnswer={props.answerFunc} answer={answer} />
        })}
      </div>
    );
  } else {
    return <div style={{display: 'none'}}></div>;
  }
}

export default Question;