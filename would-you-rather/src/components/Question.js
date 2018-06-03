import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

class Question extends Component {
  render() {
    return (
      <h3>Question: {this.props.id}</h3>
    )
  }
}


function mapStateToProps ({ authedUser }, props) {
  const { id } = props.match.params
  return {id};
}

export default withRouter(connect(mapStateToProps)(Question));
