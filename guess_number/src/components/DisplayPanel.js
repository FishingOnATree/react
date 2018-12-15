import React, { Component } from 'react';
import { connect } from 'react-redux';

class DisplayPanel extends Component {
  render() {
    console.log(this.props);
    const { guesses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Attempt</th>
            <th>Guess</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          { guesses? guesses.map((guess_attmpt) => {
              const {guess, result} = guess_attmpt;
              return (
                <tr>
                  <td>x</td>
                  <td>{guess}</td>
                  <td>{result}</td>
                </tr>
              )
            }) : <tr></tr>
          }
        </tbody>
      </table>
    )
  }
}

function mapStateToProps ({ guesses, dispatch }) {
  return {
    guesses, dispatch
  }
}

export default connect(mapStateToProps)(DisplayPanel);
