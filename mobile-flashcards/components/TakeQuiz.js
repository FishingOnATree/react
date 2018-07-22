import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'
import FlipCard from 'react-native-flip-card'
import TextButton from './TextButton'
import styles from '../styles'


class TakeQuiz extends Component {
  state =  {
    index: 0,
    correctCounter: 0,
    answer: '',
  }

  answerQuestion = () => {
    this.setState({index : this.state.correctAnswers + 1, questionCounter: this.state.questionCounter + 1})
  }

  initialState = () => {
    return {
      index: 0,
      correctCounter: 0,
      answer: '',
    }
  }



  render() {
    const { index } = this.state
    console.log('params: ' + this.props.navigation.state.params)
    const { deck } = this.props.navigation.state.params
    const questions = deck.questions
    if (index === questions.length ) {
      const { correctCounter } = this.state
      return (
        <View style={styles.container}>
            <Text style={styles.text}> Quiz Result </Text>
            <Text style={styles.textGreen}> Score : {correctAnswers}/{questions.length} </Text>
            <TextButton onPress={() => this.setState(this.initialState())}>
              Restart
            </TextButton>
            <TextButton
              onPress={() => this.props.navigation.dispatch(NavigationActions.back())}>
              Back
            </TextButton>
        </View>
      )
    } else {
      const navigate = this.props.navigation.navigate
      const question = questions[index]
      return (
        <View>
          <View style={styles.row}>
            <Text> Question {index + 1} of {questions.length} </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>{question.question}</Text>
            <Text>
              {question.answer}
            </Text>
          </View>
        </View>
      )
    }
  }
}

export default TakeQuiz
