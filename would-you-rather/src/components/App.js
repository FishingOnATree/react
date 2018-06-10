import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'

import LoadingBar from 'react-redux-loading';
import Logon from './Logon';
import Leaderboard from './Leaderboard';
import Nav from './Nav';
import NewQuestion from './NewQuestion';
import Question from './Question';
import QuestionList from './QuestionList';

import { load_data } from '../actions/shared'
import { logout } from '../actions/AuthedUser'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(load_data())
  }
  render() {
    const { authedUser, users, dispatch } = this.props;
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          { authedUser !== null ?
            <div className='container'>
              <div classname='col-container'>
                <div className='col'>
                  <Nav />
                </div>
                <div className='col'>
                  <div className='padding'></div>
                </div>
                <div className='col'>
                  <div className='userpanel'>
                    Logged in as {users[authedUser].name} (<a onClick={ () => dispatch(logout())}>Log out</a>)
                  </div>
                </div>
              </div>
              <div className="reset"></div>
              <Switch>
                <Route path='/' exact component={QuestionList} />
                <Route path='/question/:id' component={Question} />
                <Route path='/add' component={NewQuestion} />
                <Route path='/leaderboard' component={Leaderboard} />
                <Route path='*' render= {() =>(
                  <h1>404 - Page not found</h1>
                )} />
              </Switch>
            </div>
            :
            <div className='logon'>
              <Logon />
            </div>
          }
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    authedUser,
    users
  }
}

export default connect(mapStateToProps)(App)
