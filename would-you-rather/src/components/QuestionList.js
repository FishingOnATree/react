import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/utils';
import { updateViewAnswered } from '../actions/ViewAnswered';
import PropTypes from 'prop-types';

const QuestionList = ({ user, users, questions, questionIds, viewAnswered, dispatch }) => {
  const updateViewAnsweredChoice = (choice) => {
    if (viewAnswered !== choice) {
      dispatch(updateViewAnswered(choice))
    }
  };

  return (
    <div className='contents'>
      <h2>Question List</h2>
      <div>
        <a className={viewAnswered ? 'link':'active'}
          onClick={() => updateViewAnsweredChoice(false)}>View Unanswered</a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a className={viewAnswered ? 'active':'link'}
          onClick={() => updateViewAnsweredChoice(true)}>View Answered</a>
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
                    <Link className="link" to={`/question/${id}`}>
                      {question.optionOne.text} OR {question.optionTwo.text}
                    </Link>
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

function mapStateToProps({ authedUser, users, questions, viewAnswered, dispatch }) {
  const user = users[authedUser];
  return {
    user,
    users,
    questions,
    questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    viewAnswered,
    dispatch
  }
}

export default connect(mapStateToProps)(QuestionList);

QuestionList.propTypes = {
  user: PropTypes.object,
  users: PropTypes.object,
  questions: PropTypes.object,
  questionIds: PropTypes.array,
  viewAnswered: PropTypes.bool,
  dispatch: PropTypes.func,
}
