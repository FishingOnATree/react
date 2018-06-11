import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login } from '../actions/AuthedUser'
import avatar from './Avatar'

class Logon extends Component {

  render() {
    const { userIds, users, dispatch } = this.props;
    return (
      <div className='logon' >
        <h3>Please pick a login: </h3>
        <ul>
          { userIds.map((userId) => {
              const user = users[userId];
              return (
                <li key={user.id}>
                  <a onClick={() => dispatch(login(user.id))}>
                    {avatar(user)}
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

function mapStateToProps( { users, dispatch } ){
  return {
    userIds: Object.keys(users).sort((a, b) => a["name"] > b["name"]),
    users,
    dispatch
  };
}

export default connect(mapStateToProps)(Logon);
