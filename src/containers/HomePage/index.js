import React, { Component } from 'react'
import Icon from '../../public/img/logo.svg'
import ImgWrapper from './ImgWrapper'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import { connect }from 'react-redux'
import { incrementNum, getStuff } from './actions'
import { createStructuredSelector } from 'reselect'
import {selectListRepos, selectNum} from './selectors'

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>My React App</h1>
        <ImgWrapper src={Icon}/>
        <Button variant="contained"
                onClick={this.props.onClick}
                color="primary">
          You have clicked {this.props.outputButtonTxt} clicks
        </Button>
        <h2>{this.props.listRepos}</h2>
      </div>
    )
  }
}

HomePage.propTypes = {
  onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => createStructuredSelector(
{
    outputButtonTxt: selectNum,
    listRepos: selectListRepos
})(state);

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(incrementNum());
      dispatch(getStuff());
    },
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);