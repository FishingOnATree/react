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
      <View style={styles.col}>
        <View style={styles.box}>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.subtitle}>{deck.questions.length} {deck.questions.length>1 ? 'quizzes':'quiz'}</Text>
        </View>
        <View style={styles.smallbox}>
          <TextButton onPress={() => navigate('AddCard', { deck })} >
            Add Quiz
          </TextButton>
        </View>
        <View style={styles.smallbox}>
          <TextButton
            onPress={() => navigate('TakeQuiz', { deck })} >
            Start Quiz
          </TextButton>
        </View>
      </View>
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

export default connect(mapStateToProps)(ShowDeck)
