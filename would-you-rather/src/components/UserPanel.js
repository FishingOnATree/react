import React, { Component, Fragment } from 'react';
import { logout } from '../actions/AuthedUser'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'

class UserPanel extends Component {

  render() {
    const { user, dispatch, history } = this.props;
    return (
      <Fragment>
        Hi, {user.name}&nbsp;
        (<a className="logout"
          onClick={() => {
            dispatch(logout());
            history.push("/");
          }}>logout</a>)
      </Fragment>
    )
  }
}

function mapStateToProps({ authedUser, users}) {
  const user = users[authedUser];
  return {
    user
  }
}

export default withRouter(connect(mapStateToProps)(UserPanel));
