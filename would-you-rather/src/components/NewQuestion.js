import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/shared'

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    feedback: ''
  }

  handleChange = (e, option) => {
    const text = e.target.value
    this.setState(() => ({
      [option]: text
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { optionOneText, optionTwoText } = this.state
    const { dispatch, authedUser } = this.props
    dispatch(handleAddQuestion(optionOneText, optionTwoText, authedUser))
    this.setState(() => ({
      optionOneText: '',
      optionTwoText: '',
      feedback: "New question added successfully."
    }))
  }

  render () {
    const { optionOneText, optionTwoText, feedback } = this.state
    return (
      <div className='contents'>
        <h2>Would You Rather</h2>
        {feedback ?
          (
            <div>
              <span>{feedback}</span>&nbsp;
              <a className="link" onClick={() => this.setState(() => ({
                optionOneText: '',
                optionTwoText: '',
                feedback: ''
              }))}>Add more</a>
            </div>
          ) : (
            <form onSubmit={this.handleSubmit}>
              <textarea
                placeholder="optinOne"
                value={optionOneText}
                onChange={(e) => this.handleChange(e, "optionOneText")}
                className='textarea'
                maxLength={160}
              />
              <textarea
                placeholder="optinTwo"
                value={optionTwoText}
                onChange={(e) => this.handleChange(e, "optionTwoText")}
                className='textarea'
                maxLength={160}
              />
              <br />
              <button
                className='btn'
                type='submit'
                disabled={optionOneText === '' || optionTwoText === '' || optionOneText === optionTwoText}>
                  Submit
              </button>
            </form>
          )
        }
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}
export default connect(mapStateToProps)(NewQuestion);
