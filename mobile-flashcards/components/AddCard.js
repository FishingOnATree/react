import React, { Component } from 'react'
import { Text, TextInput, View, KeyboardAvoidingView } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import styles from '../styles'
import TextButton from './TextButton'
import { addCard } from '../actions'
import { addCardToDeck, makeCard } from '../utils/api'

class AddCard extends Component {

  state = {
    question: '',
    answer: '',
    text: null,
  }

  submit = () => {
    const question = this.state.question.trim()
    const answer = this.state.answer.trim()
    const { deck } = this.props.navigation.state.params

    if ( question && answer) {
      const card = makeCard(question, answer)
      addCardToDeck(deck.title, card).then(() => {
        this.props.dispatch(addCard(deck.title, card))
        this.props.navigation.dispatch(NavigationActions.back())
      })
    } else {
      this.setState({question: '', answer: '', text: 'Fields cannot be empty'})
    }
  }

  render() {
    const { title } = this.props.navigation.state.params.deck

    return (
      <KeyboardAvoidingView behavior='padding' >
        <Text style={styles.subtitle}>Question</Text>
        <TextInput
          ref='question_input'
          multiline = {true}
          style={ styles.input_ios }
          placeholder="New Question"
          value={this.state.question}
          onChangeText={(question) => this.setState({question})}
        />
        <Text style={styles.subtitle}>Answer</Text>
        <TextInput
          multiline = {true}
          style={ styles.input_ios }
          placeholder="New Answer"
          value={this.state.answer}
          onChangeText={(answer) => this.setState({answer})}
        />
        { this.state.text === null ? '':<Text style={styles.warning}>{this.state.text}</Text>}
        <TextButton onPress={this.submit}>
          ADD
        </TextButton>
      </KeyboardAvoidingView>
    )
  }
}

function mapStateToProps(decks, {dispatch, navigation}) {
  return {
    decks,
    dispatch,
    navigation
  }
}

export default connect(mapStateToProps)(AddCard)
