import React, { Component } from 'react';
import Feedback from './Feedback/Feedback';

class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  render() {
    return (
        <Feedback/>
    );
  }
}

export default App;



