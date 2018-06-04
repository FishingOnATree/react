import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatDate } from '../utils/utils'
import { updateViewAnswered } from '../actions/ViewAnswered'

class QuestionList extends Component {
  viewAnsweredPage = (newChoice) => {
    console.log("new choice: " + newChoice)
    this.setState({
      viewAnswered: newChoice
    })
  }

  render () {
    console.log(this.props);
    const { user, questions, questionIds, viewAnswered, dispatch } = this.props;
    return (
      <div className='contents'>
        <h3>QuestionList - {viewAnswered ? "Answered" : "Unanswered"}</h3>
        <div>
          <a onClick={() => dispatch(updateViewAnswered(false))}>View Unanswered</a> |
          <a onClick={() => dispatch(updateViewAnswered(true))}>View Answered</a>
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

function mapStateToProps({ authedUser, users, questions, viewAnswered }) {
  console.log("mapStateToProps")
  const user = users[authedUser];
  return {
    user,
    questions,
    questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    viewAnswered
  }
}

export default connect(mapStateToProps)(QuestionList);
