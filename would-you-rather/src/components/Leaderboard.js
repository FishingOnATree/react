import React, { Component } from 'react';
import { connect } from 'react-redux';

class Leaderboard extends Component {
  render () {
    console.log("Leaderboard")
    console.log(this.props)
    const { authedUser, users, userIds } = this.props;
    console.log(userIds)
    console.log(users)
    return (
      <div className='contents'>
        <h3>Leaderboard</h3>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Rank</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            { userIds.map((userId, index) => {
              return (
                <tr key={userId}>
                  <td>{users[userId].avatarURL} - {users[userId].name} </td>
                  <td>{index + 1}</td>
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
