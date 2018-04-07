import React from 'react';
import Answer from './Answer.jsx';

const Question = (props) => {
  const p = props.prompt;
  if (p.question) {
    const incorrect = p.incorrect_answers.map((answer) => {
      return {answer: answer, correct: false};
    });
    const answers = [...incorrect, {answer: p.correct_answer, correct: true}];
    const randomAnswers = [];
    while (answers.length) {
      let randomIndex = Math.floor(Math.random(answers.length));
      randomAnswers.push(answers.splice(randomIndex, 1)[0]);
    }
    return (
      <div>
        <h3>{props.prompt.question}</h3>
        <Answer handleAnswer={props.answerFunc} answer={randomAnswers[0]} />
        <Answer answer={randomAnswers[1]} />
        <Answer answer={randomAnswers[2]} />
        <Answer answer={randomAnswers[3]} />
      </div>
    )
  } else {
    return <div></div>
  }
}

export default Question;