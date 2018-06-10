import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login } from '../actions/AuthedUser'
class Logon extends Component {

  render() {
    const { userIds, users } = this.props;
    return (
      <div className='logon' >
        <h3>Please pick a login: </h3>
        <ul>
          { userIds.map((userId) => {
              const user = users[userId];
              return (
                <li key={user.id}>
                  <a onClick={() => this.props.dispatch(login(user.id))}>
                    <img
                      src={users[userId].avatarURL}
                      alt={`Avatar of ${users[userId].name}`}
                      className='avatar'
                      title={user.name}
                    />{user.name}
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps( { users } ){
  return {
    userIds: Object.keys(users).sort((a, b) => a["name"] > b["name"]),
    users
  };
}

export default connect(mapStateToProps)(Logon);
