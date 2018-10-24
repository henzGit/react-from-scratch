import React, { Component } from 'react';
import Icon from '../public/img/logo.svg';
import ImgWrapper from './ImgWrapper';

class App extends Component {
  render() {
    return (
      <div>
        <h1>My React App</h1>
        <ImgWrapper src={Icon}/>
      </div>
    )
  }
}

export default App;