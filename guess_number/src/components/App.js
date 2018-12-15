import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import ControlPanel from './ControlPanel';
import DisplayPanel from './DisplayPanel';
import { startGame } from '../actions';
import { generate_answer } from '../utils';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(startGame(generate_answer()))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Guess Number</h1>
        </div>
        <ControlPanel />
        <DisplayPanel />
      </div>
    );
  }
}

function mapStateToProps ({ dispatch }) {
  return {
    dispatch
  }
}
export default connect(mapStateToProps)(App)
