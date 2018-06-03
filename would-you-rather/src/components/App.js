import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoadingBar from 'react-redux-loading';
import Leaderboard from './Leaderboard'
import QuestionList from './QuestionList'
import NewQuestion from './NewQuestion'
import Question from './Question'
import Nav from './Nav'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
              <div>
                  <Route path='/' exact component={QuestionList} />
                  <Route path='/question/:id' component={Question} />
                  <Route path='/add' component={NewQuestion} />
                  <Route path='/leaderboard' component={Leaderboard} />
              </div>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App;
