import React, { Fragment } from 'react';
import { logout } from '../actions/AuthedUser'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'

// class UserPanel extends Component {
//
//   render() {
//     console.log("logout")
//     console.log(this.props)
//     const { user, dispatch, history } = this.props;
//     return (
//       <Fragment>
//         Hi, {user.name}
//         (<a className="logout"
//           onClick={() => {
//             dispatch(logout());
//             history.push("/");
//           }}>logout</a>)
//       </Fragment>
//     )
//   }
// }

const UserPanel = ({ user, dispatch, history }) => {
  return (
    <Fragment>
      Hi, {user.name}
      (<a className="logout"
        onClick={() => {
          dispatch(logout());
          history.push("/");
        }}>logout</a>)
    </Fragment>
  )
}

function mapStateToProps({ authedUser, users, dispatch }, {history}) {
  const user = users[authedUser];
  return {
    user,
    dispatch,
    history
  }
}

export default withRouter(connect(mapStateToProps)(UserPanel));
