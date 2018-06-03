import React, { Component } from 'react';
import { connect } from 'react-redux'

class Logon extends Component {

  render() {
    const { userIds, users } = this.props;
    return (
      <div className='logon' >
        <h3>Please log in</h3>
        { userIds.map((userId) => {
            const user = users[userId];
            return (
              <div key={user.id} >
                <label >
                  <input type="radio" value={user.id} id={user.id} />
                  {user.name}
                </label>
              </div>
            )
          })
        }
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
