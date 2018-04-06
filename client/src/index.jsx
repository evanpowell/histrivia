import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    axios.get('/items')
    .then(data => {
      this.setState({
        items: data
      });
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <h1>This is the root component</h1>
      </div>
    )
  }
}

const element = <h1>Hey There!</h1>;

ReactDOM.render(element, document.getElementById('app'));