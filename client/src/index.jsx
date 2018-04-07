import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Question from './components/Question.jsx';
import Answer from './components/Answer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: {},
      answer: {
        isAnswered: false,
        isCorrect: false
      }
    }
  }

  componentDidMount() {
  }

  handleAnswer(isCorrect) {
    if (isCorrect) {
      console.log('you got it right!')
      this.setState({
        answer: {
          isCorrect: true,
          isAnswered: true
        }
      });
    } else {
      this.setState({
        answer: {
          isCorrect: false,
          isAnswered: true
        }
      });
    }
  }

  getQuestion() {
    const component = this;
    axios.get('http://opentdb.com/api.php?amount=1&category=23&difficulty=easy&type=multiple')
    .then(result => {
      console.log(result.data.results[0]);
      component.setState({
        question: result.data.results[0],
        answer: {
          isAnswered: false,
          isCorrect: false
        }
      });
    })
    .catch(err => {
      console.log('err in front end: ', err);
    });
  }

  render() {
    return (
      <div>
        <h1>Histrivia</h1>
        <h3>A trivia game of historical proportions</h3>
        <button onClick={this.getQuestion.bind(this)}>Play!</button>
        <Question
          answer={this.state.answer}
          prompt={this.state.question}
          answerFunc={this.handleAnswer.bind(this)}/>
        <Answer prompt={this.state.question} answer={this.state.answer}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));