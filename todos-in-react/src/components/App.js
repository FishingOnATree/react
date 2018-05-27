import React from 'react'
import { connect } from 'react-redux'
import { handleInit } from '../actions/shared'
import ConnectedTodos from './Todos'
import ConnectedGoals from './Goals'


class App extends React.Component {
  componentDidMount () {
    this.props.dispatch(handleInit());
  }

  render() {
    if (this.props.loading == true) {
      return <h3>Loading</h3>
    } else {
      return (
        <div>
          <ConnectedTodos />
          <ConnectedGoals />
        </div>
      )
    }
  }
}

export default connect((state) => ({
  loading: state.loading
}))(App)
