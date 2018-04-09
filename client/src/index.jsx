import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Question from './components/Question.jsx';
import Answer from './components/Answer.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import LeaderBoard from './components/LeaderBoard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: {},
      answer: {
        isAnswered: false,
        isCorrect: false,
        gifUrl: ''
      },
      user: {
        name: 'not signed in',
        score: 0
      },
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

  handleLogin(event, username) {
    if(event) {
      event.preventDefault();
    }
    const component = this;
    axios
      .post('/login', {username: username})
      .then(result => {
        if (result.data.username) {
          component.setState({
            user: {
              name: result.data.username,
              score: result.data.score
            }
          })
        }
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({
      loginVal: ''
    });
  }

  handleLoginChange(event) {
    this.setState({loginVal: event.target.value});
  }

  handleSignup(event, username) {
    event.preventDefault();
    console.log(username);
    const component = this;
    axios
      .post('/signup', {username: username})
      .then(result => {
        console.log(result.data);
        component.handleLogin(null, username);
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({
      signupVal: ''
    })
  }

  handleSignupChange(event) {
    this.setState({signupVal: event.target.value});    
  }

  handleAnswer(isCorrect) {
    const  component = this;
    if (isCorrect) {
      console.log('you got it right!');
      axios.get('https://yesno.wtf/api?force=yes')
        .then(result => {
          component.setState({
            answer: {
              isCorrect: true,
              isAnswered: true,
              gifUrl: result.data.image
            }
          });
        })
        .catch(err => {
          console.log(err);
        });
      const {name, score} = component.state.user;
      axios.post('/addPoints', {username: name})
        .then(result => {
          console.log('Point add to the database!')
          component.setState({
            user: {
              name: name,
              score: score + 1
            }
          })
        })
    } else {
      axios.get('https://yesno.wtf/api?force=no')
        .then(result => {
          component.setState({
            answer: {
              isCorrect: false,
              isAnswered: true,
              gifUrl: result.data.image
            }
          });
        })
        .catch(err => {
          console.log(err);
        })
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
    const playBtnStyle = {
      marginBottom: '2rem'
    };
    return (
      <div className="text-center">
        <div className="row">
          <div className="col-md-5 text-left">
            <Login
              login={this.handleLogin}
              change={this.handleLoginChange}
              value={this.state.loginVal} />
            <Signup
              signup={this.handleSignup}
              change={this.handleSignupChange}
              value={this.state.signupVal} />
          </div>
          <div className="col-md-4 col-md-offset-3">
            <LeaderBoard
              user={this.state.user} />
          </div>
        </div>
        <h1 className="text-center">TriGIFia</h1>
        <h3>The trivia game with gifs</h3>
        <button
          className="btn"
          style={playBtnStyle}
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