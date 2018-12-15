import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessNumber } from '../actions';
import { check_guess } from '../utils';

class ControlPanel extends Component {
  guess = (e) => {
    this.props.dispatch(guessNumber(check_guess()))
  }
  render() {
    return (
      <div>
        <span>4 numbers</span> | <button onClick={this.guess}>Guess</button>
      </div>
    )
  }
}

function mapStateToProps ({ dispatch }) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps)(ControlPanel);
