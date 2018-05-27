import React from 'react'
import { handleAddGoal, handleDeleteGoal } from '../actions/goals'
import { connect } from 'react-redux'
import List from './List'

class Goals extends React.Component {
  addItem = (e) => {
    e.preventDefault();
    this.props.dispatch(handleAddGoal(this.input.value, ()=>{this.input.value = ''}))
  }
  removeItem = (goal) => {
    this.props.dispatch(handleDeleteGoal(goal));
  }
  render () {
    return (
      <div>
        <h1>Goals list</h1>
        <input type='text' placeholder='Add todo'
          ref={(input) => this.input = input}
        />
        <button onClick={this.addItem}>Add Goals</button>
        <List items={this.props.goals} remove={this.removeItem}/>
      </div>
    )
  }
}

export default connect((state) => ({
  goals: state.goals
}))(Goals)
