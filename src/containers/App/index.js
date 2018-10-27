import React, { Component } from 'react';
import Icon from '../../public/img/logo.svg';
import ImgWrapper from './ImgWrapper';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { connect }from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <h1>My React App</h1>
        <ImgWrapper src={Icon}/>
        <Button variant="contained"
                onClick={this.props.onClick}
                color="primary">
          Hello World
        </Button>
      </div>
    )
  }
}

App.propTypes = {
  onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    outputButtonTxt: state.num
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch({type: 'INCREMENT_NUM'})
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);