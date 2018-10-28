import React, { Component } from 'react'
import Icon from '../../public/img/logo.svg'
import ImgWrapper from './ImgWrapper'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import { connect }from 'react-redux'
import { incrementNum, getStuff, changeUserName } from
    './actions'
import { createStructuredSelector } from 'reselect'
import {selectListRepos, selectNum, selectNumRepos, selectCurrentUser}
  from './selectors'

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>My React App</h1>
        <ImgWrapper src={Icon}/>
        <Button variant="contained"
                onClick={this.props.onClick}
                color="primary">
          You have clicked {this.props.outputButtonTxt} times
        </Button>
        <h2/>
        <input type="text" placeholder="Input user name..."
               value={this.props.currentUser}
               onChange={this.props.handleFilterTextChange}
        />
        <h2>Selected user is {this.props.currentUser} </h2>
        <h2>This user has {this.props.numRepos} repos</h2>
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
    listRepos: selectListRepos,
    numRepos: selectNumRepos,
    currentUser: selectCurrentUser,

})(state);

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(incrementNum());
      dispatch(getStuff());
    },
    handleFilterTextChange : (evt) => {
      dispatch(changeUserName(evt.target.value))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);