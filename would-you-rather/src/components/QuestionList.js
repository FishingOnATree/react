import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatDate } from '../utils/utils'

class QuestionList extends Component {
  render () {
    const { user, questions, questionIds, viewUnanswer } = this.props;
    return (
      <div className='contents'>
        <h3>QuestionList</h3>
        <ul>
          { questionIds.filter((id) => id in user.answers !== viewUnanswer)
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

function mapStateToProps({ authedUser, users, questions }, props) {
  const user = users[authedUser];
  let { viewUnanswer } = props;
  if (viewUnanswer === null) {
    viewUnanswer = true;
  }
  return {
    user,
    questions,
    questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    viewUnanswer
  }
}

export default connect(mapStateToProps)(QuestionList);
