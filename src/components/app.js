import React, { Component } from 'react';
import Icon from '../public/img/logo.svg';
import ImgWrapper from './ImgWrapper';
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <div>
        <h1>My React App</h1>
        <ImgWrapper src={Icon}/>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    )
  }
}

export default App;