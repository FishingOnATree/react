import React, { Component } from 'react'
import { Text, TextInput, View, KeyboardAvoidingView } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import TextButton from './TextButton'
import styles from '../styles'
import { saveDeckTitle } from '../utils/api'

class AddDeck extends Component {
  state = {
    title: '',
    warning: ''
  }

  makeState(title, warning) {
    return {title, warning}
  }

  submit() {
    let { title } = this.state
    title = title.trim().toUpperCase()
    if (title) {
      saveDeckTitle(title).then(() => {
        this.setState(this.makeState('', 'Title saved'))
        this.props.dispatch(addDeck(title))
      })
    } else {
      this.setState(this.makeState('', 'Invalid title'))
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={styles.headingTitle}>Title of new deck</Text>
        <TextInput
          ref='text_input'
          style={ styles.input }
          placeholder="Deck Title"
          value={this.state.title}
          onChangeText={(title) => this.setState(this.makeState(title, ''))}
        />
        <Text style={style.warning}>{this.state.warning}</Text>
        <TextButton onPress={() => this.submit()}>
          Submit
        </TextButton>
      </KeyboardAvoidingView>
    )
  }
}

function mapStateToProps({dispatch}) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps)(AddDeck)
