import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

class Question extends Component {
  render() {
    const { id, authedUser, users, questions } = this.props;
    const answered = id in users[authedUser].answers;
    return (
      <div>
        <h3>Would you rather - {id} - { answered ? "Answered" : "Not answered"}</h3>
        <div>
          { answered ? (
              <ul>
                <li>
                  {questions[id].optionOne.text} - {questions[id].optionOne.votes.length} votes
                  {questions[id].optionOne.votes.indexOf(authedUser) >= 0 ? " including you":""}
                </li>
                <li>
                  {questions[id].optionTwo.text} - {questions[id].optionTwo.votes.length} votes
                  {questions[id].optionTwo.votes.indexOf(authedUser) >= 0 ? " including you":""}
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  Pick {questions[id].optionOne.text}
                </li>
                <li>
                  Pick {questions[id].optionTwo.text}
                </li>
              </ul>
            )
          }
        </div>
      </div>
    )
  }
}


function mapStateToProps ({ authedUser, users, questions }, props) {
  const { id } = props.match.params
  return {
    id,
    authedUser,
    users,
    questions
  };
}

export default withRouter(connect(mapStateToProps)(Question));
