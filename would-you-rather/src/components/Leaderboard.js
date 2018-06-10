import React, { Component } from 'react';
import { connect } from 'react-redux';

class Leaderboard extends Component {
  render () {
    const { authedUser, users, userIds } = this.props;
    return (
      <div className='contents'>
        <h3>Leaderboard</h3>
        <table className='leaderboard'>
          <thead>
            <tr>
              <th>Rank</th>
              <th colspan="2">User</th>
              <th>Score</th>
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
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

function score (user) {
  return Object.keys(user.answers).length + user.questions.length;
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
    userIds: Object.keys(users)
      .sort((a,b) => score(users[b]) - score(users[a]))
  }
}

export default connect(mapStateToProps)(Leaderboard);
