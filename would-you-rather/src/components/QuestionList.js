import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatDate } from '../utils/utils'

class QuestionList extends Component {
  viewAnsweredPage = (viewAnswered) => {
    // TODO: how to switch?
  }

  render () {
    console.log(this.props);
    const { user, questions, questionIds, viewAnswered } = this.props;
    return (
      <div className='contents'>
        <h3>QuestionList - {viewAnswered ? "Answered" : "Unanswered"}</h3>
        <div>
          <a onClick={this.viewAnsweredPage(false)}>View Unanswered</a> |
          <a onClick={this.viewAnsweredPage(true)}>View Answered</a>
        </div>
        <ul>
          { questionIds.filter((id) => (id in user.answers === viewAnswered))
              .map((id) => {
                const question = questions[id]
                return (
                  <li key={id}>{id} - {formatDate(question.timestamp)}</li>
                )
              })
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }, { viewAnswered }) {
  const user = users[authedUser];
  console.log("viewAnswered init: " + viewAnswered);
  if (viewAnswered === undefined) {
    viewAnswered = false;
  }
  return {
    user,
    questions,
    questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    viewAnswered: viewAnswered
  }
}

export default connect(mapStateToProps)(QuestionList);
