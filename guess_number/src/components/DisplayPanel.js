import React, { Component } from 'react';
import { connect } from 'react-redux';

class DisplayPanel extends Component {
  render() {
    console.log(this.props);
    const { guesses, gotit } = this.props;
    return (
      <div>
        {gotit ? <div>You won</div>:""}
        <table>
          <thead>
            <tr>
              <th>Attempt</th>
              <th>Guess</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            { guesses ? guesses.map((guess_attmpt, index, list) => {
                const {guess, result} = guess_attmpt;
                return (
                  <tr key={list.length - index}>
                    <td>{list.length - index}</td>
                    <td>{guess}</td>
                    <td>{result}</td>
                  </tr>
                )
              }) : <tr></tr>
            }
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps ({ guess_number, dispatch }) {
  return {
    ...guess_number, dispatch
  }
}

export default connect(mapStateToProps)(DisplayPanel);
