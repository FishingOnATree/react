import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleAnswerQuestion } from '../actions/shared'

class Question extends Component {
  answer = (option) => {
    this.props.dispatch(handleAnswerQuestion(this.props.authedUser, this.props.id, option));
  }

  calculatePercent = (num, denom) => {
    return Math.floor((num / denom) * 100)
  }

  render() {
    const { id, authedUser, users, questions } = this.props;
    const answered = id in users[authedUser].answers;
    const question = questions[id];
    const oneVotes = question.optionOne.votes.length;
    const twoVotes = question.optionTwo.votes.length;
    const totalVotes = oneVotes + twoVotes;
    if (id in questions) {
      return (
        <div>
          <h2>Would You Rather</h2>
          <div>
            { answered ? (
                <ul>
                  <li>
                    {question.optionOne.text}: {this.calculatePercent(oneVotes, totalVotes)}% - {oneVotes} votes
                    {question.optionOne.votes.indexOf(authedUser) >= 0 ? " (including you)":""}
                  </li>
                  <li>
                    {question.optionTwo.text}: {this.calculatePercent(twoVotes, totalVotes)}% - {twoVotes} votes
                    {question.optionTwo.votes.indexOf(authedUser) >= 0 ? " (including you)":""}
                  </li>
                </ul>
              ) : (
                <ul>
                  <li>
                    <a className="link" onClick={() => this.answer("optionOne")}>{question.optionOne.text}</a>
                  </li>
                  <li>
                    <a className="link" onClick={() => this.answer("optionTwo")}>{question.optionTwo.text}</a>
                  </li>
                </ul>
              )
            }
          </div>
          <span className="smallfont">(id: {id})</span>
        </div>
      )
    } else {
      return (
        <h3>Question {id} is not found</h3>
      )
    }
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
