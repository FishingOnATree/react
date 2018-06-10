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
    const { user, users, questions, questionIds, viewAnswered } = this.props;
    return (
      <div className='contents'>
        <h2>Question List</h2>
        <div>
          <a className={viewAnswered ? 'link':'active'}
            onClick={() => this.updateViewAnsweredChoice(false)}>View Unanswered</a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a className={viewAnswered ? 'active':'link'}
            onClick={() => this.updateViewAnsweredChoice(true)}>View Answered</a>
        </div>
        <table className='questionboard'>
          <thead>
            <tr>
              <th>Time added</th>
              <th>Question</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
          { questionIds.filter((id) => (id in user.answers === viewAnswered))
              .map((id) => {
                const question = questions[id]
                return (
                  <tr key={id}>
                    <td>{formatDate(question.timestamp)}</td>
                    <td>
                      <Link className="link" to={`/question/${id}`}>{id}</Link>
                    </td>
                    <td>{users[question.author].name}</td>
                  </tr>
                )
              })
          }
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users, questions, viewAnswered }) {
  const user = users[authedUser];
  return {
    user,
    users,
    questions,
    questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    viewAnswered
  }
}

export default connect(mapStateToProps)(QuestionList);
