
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView } from 'react-native'
import { Platform } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import TextButton from './TextButton'
import { white } from '../utils/colors'


class AddDeck extends Component {
  state = {
    title: '',
    warning: ''
  }

  getState(title, warning) {
    return {title, warning}
  }

  submit() {
    let { title } = this.state
    title = title.trim().toUpperCase()
    if (title) {
      this.props.dispatch(addDeck(title))
      this.setState(this.getState('', 'Title saved'))
      // navigate to DeckList and call API to AsyncStorage
      //this.props.navigation.navigate('DeckDetail', { deckTitle: text })
    } else {
      this.setState(this.getState('', 'Invalid title'))
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
          onChangeText={(title) => this.setState(this.getState(title, ''))}
        />
        <Text>{this.state.warning}</Text>
        <TextButton onPress={() => this.submit()}>
          Submit
        </TextButton>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingTitle: {
    fontSize: 30,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    fontSize: 20,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    alignSelf: 'stretch',
  }
})

function mapStateToProps({dispatch}) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps)(AddDeck)
