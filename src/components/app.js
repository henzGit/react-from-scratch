import React, { Component } from 'react';
import Icon from '../public/img/logo.svg';

class App extends Component {
  render() {
    return (
      <div>
        <h1>My React App</h1>
        <img src={Icon}/>
      </div>
    )
  }
}

export default App;