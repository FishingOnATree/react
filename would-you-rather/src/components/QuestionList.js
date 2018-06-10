import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/utils';
import { updateViewAnswered } from '../actions/ViewAnswered';


class QuestionList extends Component {
  updateViewAnsweredChoice = (choice) => {
    if (this.props.viewAnswered !== choice) {
      this.props.dispatch(updateViewAnswered(choice))
    }
  }

  render () {
    console.log(this.props);
    const { user, questions, questionIds, viewAnswered } = this.props;
    return (
      <div className='contents'>
        <h2>Question List</h2>
        <div>
          <a className={viewAnswered ? '':'active'}
            onClick={() => this.updateViewAnsweredChoice(false)}>View Unanswered</a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a className={viewAnswered ? 'active':''}
            onClick={() => this.updateViewAnsweredChoice(true)}>View Answered</a>
        </div>
        <ul>
          { questionIds.filter((id) => (id in user.answers === viewAnswered))
              .map((id) => {
                const question = questions[id]
                return (
                  <li key={id}>
                    <Link  to={`/question/${id}`}>
                      {id} - {formatDate(question.timestamp)}
                    </Link>
                  </li>
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
