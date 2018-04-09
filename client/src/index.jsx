import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Question from './components/Question.jsx';
import Answer from './components/Answer.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: {},
      answer: {
        isAnswered: false,
        isCorrect: false
      },
      user: {},
      loginVal: '',
      signupVal: ''
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleSignupChange = this.handleSignupChange.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.getQuestion = this.getQuestion.bind(this);
  }

  componentDidMount() {
  }

  handleLogin(event) {
    event.preventDefault();
    const username = this.state.loginVal;
    axios
      .post('/login', {username: username})
      .then(result => {
        console.log(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleLoginChange(event) {
    this.setState({loginVal: event.target.value});
  }

  handleSignup(event) {
    event.preventDefault();
    const username = this.state.signupVal;
    axios
      .post('/signup', {username: username})
      .then(result => {
        console.log(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleSignupChange(event) {
    this.setState({signupVal: event.target.value});    
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
    axios.get('http://opentdb.com/api.php?amount=1&type=multiple')
    .then(result => {
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
        <Login
          login={this.handleLogin}
          change={this.handleLoginChange}
          value={this.state.loginVal} />
        <Signup
          signup={this.handleSignup}
          change={this.handleSignupChange}
          value={this.state.signupVal} />
        <h1>Gif Trivia</h1>
        <h3>A trivia game with gifs I guess</h3>
        <button
          onClick={this.getQuestion.bind(this)}>Play!</button>
        <Question
          answer={this.state.answer}
          prompt={this.state.question}
          answerFunc={this.handleAnswer.bind(this)}/>
        <Answer
          prompt={this.state.question}answer={this.state.answer}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));