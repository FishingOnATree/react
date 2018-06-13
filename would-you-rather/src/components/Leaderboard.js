import React, { Component } from 'react';
import { connect } from 'react-redux';

const SORT_BY_TOTAL = "SORT_BY_TOTAL";
const SORT_BY_ASKED = "SORT_BY_ASKED";
const SORT_BY_ANSWERED = "SORT_BY_ANSWERED";

class Leaderboard extends Component {
  state = {
    sort: SORT_BY_TOTAL
  }

  changeSort = (option) => {
    this.setState({
      sort: option
    })
  }

  getSortUserIds = (users) => {
    const { sort } = this.state;
    let func;
    switch(sort) {
      case SORT_BY_TOTAL:
        func = score;
        break;
      case SORT_BY_ASKED:
        func = countAsked;
        break;
      case SORT_BY_ANSWERED:
        func = countAnswered;
        break;
      default:
        func = this.score;
        break;
    }
    return Object.keys(users)
      .sort((a,b) => func(users[b]) - func(users[a]))
  }

  render () {
    const { authedUser, users } = this.props;
    const userIds = this.getSortUserIds(users);
    return (
      <div className='contents'>
        <h3>Leaderboard</h3>
        <table className='leaderboard'>
          <thead>
            <tr>
              <th>Rank</th>
              <th colSpan="2">User</th>
              <th><a className="link" onClick={() => this.changeSort(SORT_BY_TOTAL)}>Total</a></th>
              <th><a className="link" onClick={() => this.changeSort(SORT_BY_ASKED)}>Asked</a></th>
              <th><a className="link" onClick={() => this.changeSort(SORT_BY_ANSWERED)}>Answered</a></th>
            </tr>
          </thead>
          <tbody>
            { userIds.map((userId, index) => {
              return (
                <tr key={userId}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={users[userId].avatarURL}
                      alt={`Avatar of ${users[userId].name}`}
                      className='avatar'
                    />
                  </td>
                  <td className={userId === authedUser ? 'active':''}>{users[userId].name} </td>
                  <td>{score(users[userId])}</td>
                  <td>{countAsked(users[userId])}</td>
                  <td>{countAnswered(users[userId])}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

function countAsked(user) {
  return user.questions.length;
}

function countAnswered(user) {
  return Object.keys(user.answers).length;
}

function score(user) {
  return countAnswered(user) + countAsked(user);
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users
  }
}

export default connect(mapStateToProps)(Leaderboard);
