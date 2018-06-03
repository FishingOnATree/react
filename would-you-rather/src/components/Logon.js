import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login } from '../actions/AuthedUser'
class Logon extends Component {

  render() {
    const { userIds, users } = this.props;
    return (
      <div className='logon' >
        <div>
          <h3>Please log in</h3>
          <ul>
            { userIds.map((userId) => {
                const user = users[userId];
                return (
                  <li key={user.id}>
                    <a onClick={() => this.props.dispatch(login(user.id))}>{user.name}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
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
