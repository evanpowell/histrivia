import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Question from './components/Question.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: {},
      correct: false
    }
  }

  componentDidMount() {
  }

  handleAnswer(isCorrect) {
    if (isCorrect) {
      console.log('you got it right!')
      this.setState({
        correct: true
      });
    } else {
      console.log('you got it wrong!')
    }
  }

  getQuestion() {
    const component = this;
    axios.get('http://opentdb.com/api.php?amount=1&category=23&difficulty=easy&type=multiple')
    .then(result => {
      console.log(result.data.results[0]);
      component.setState({
        question: result.data.results[0]
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
        <Question prompt={this.state.question} answerFunc={this.state.handleAnswer.bind(this)}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));