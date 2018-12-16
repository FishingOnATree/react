import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessNumber } from '../actions';
import { check_guess } from '../utils';

class ControlPanel extends Component {
  state = {
    newGuess: ''
  }
  updateGuess = (value) => {
    this.setState({newGuess: value})
  }
  handleInpit = (e) => {
    e.preventDefault()
    let value = e.target.value
    if (value.length > 4) {
      value = this.state.newGuess
    }
    this.updateGuess(value)
  }
  guess = (e) => {
    let value = this.state.newGuess
    this.props.dispatch(guessNumber(check_guess(this.props.answer,value)))
    this.updateGuess('')
  }
  render() {
    return (
      <div>
        <input value={this.state.newGuess} onChange={(e) => this.handleInpit(e)}></input>  <button onClick={this.guess}>Guess</button>
      </div>
    )
  }
}

function mapStateToProps ({ guess_number, dispatch }) {
  return {
    ...guess_number, dispatch
  }
}

export default connect(mapStateToProps)(ControlPanel);
