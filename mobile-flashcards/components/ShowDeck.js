import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import TextButton from './TextButton'
import styles from '../styles'

class ShowDeck extends Component {

  render() {
    const navigate = this.props.navigation.navigate
    const { title } = this.props.navigation.state.params
    const deck = this.props.decks[title]
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.cards}>{deck.questions.length} {deck.questions.length>1 ? 'quizzes':'quiz'}</Text>
        <TextButton /*onPress={() => navigate('AddQuiz', { deck })}*/ >
          Add Quiz
        </TextButton>
        <TextButton
          /*onPress={() => navigate('ViewQuiz', { deck })}*/ >
          Start Quiz
        </TextButton>
      </View>
    )
  }
}

function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(ShowDeck)
