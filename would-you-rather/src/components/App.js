import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { load_data } from '../actions/shared'
import LoadingBar from 'react-redux-loading';
import Logon from './Logon';
import Leaderboard from './Leaderboard';
import Nav from './Nav';
import NewQuestion from './NewQuestion';
import Question from './Question';
import QuestionList from './QuestionList';
import UserPanel from './UserPanel';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(load_data())
  }
  render() {
    const { authedUser } = this.props;
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          { authedUser !== null ?
            <div className='container'>
              <div classname='col-container'>
                <div className='col-left'>
                  <Nav />
                </div>
                <div className='col-right'>
                  <UserPanel />
                </div>
              </div>
              <div className="divider"></div>
              <Switch>
                <Route path='/' exact component={QuestionList} />
                <Route path='/question/:id' component={Question} />
                <Route path='/add' component={NewQuestion} />
                <Route path='/leaderboard' component={Leaderboard} />
                <Route path='*' render= {() =>(
                  <h1>Page not found</h1>
                )} />
              </Switch>
            </div>
            :
            <Logon />
          }
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)
