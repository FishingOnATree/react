import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading';
import Leaderboard from './Leaderboard';
import QuestionList from './QuestionList';
import NewQuestion from './NewQuestion';
import Question from './Question';
import Logon from './Logon';
import Nav from './Nav';
import { load_data } from '../actions/load_data'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(load_data())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
              { this.props.singedIn === true ?
                <div>
                  <Route path='/' exact component={QuestionList} />
                  <Route path='/question/:id' component={Question} />
                  <Route path='/add' component={NewQuestion} />
                  <Route path='/leaderboard' component={Leaderboard} />
                </div>
                :
                <div>
                  <Logon />
                </div>
              }
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    singedIn: authedUser !== null
  }
}

export default connect(mapStateToProps)(App)
