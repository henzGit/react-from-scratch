import React, { Component } from 'react';
import Icon from '../../public/img/logo.svg';
import ImgWrapper from './ImgWrapper';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { connect }from 'react-redux';
import { incrementNum } from './actions';
import { createStructuredSelector } from 'reselect';
import { makeSelectNum } from './selectors';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>My React App</h1>
        <ImgWrapper src={Icon}/>
        <Button variant="contained"
                onClick={this.props.onClick}
                color="primary">
          Hello World {this.props.outputButtonTxt}
        </Button>
      </div>
    )
  }
}

HomePage.propTypes = {
  onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    outputButtonTxt: makeSelectNum(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => dispatch(incrementNum()),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);