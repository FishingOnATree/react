import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'
import FlipCard from 'react-native-flip-card'
import TextButton from './TextButton'
import styles from '../styles'


class TakeQuiz extends Component {
  static getDefaultState() {
    return {
      index: 0,
      correctCounter: 0,
      showCurrentAnswer: false,
    }
  }

  constructor(props) {
    super(props);
    this.state = TakeQuiz.getDefaultState()
  }

  answerQuestion = (correctAnswer) => {
    this.setState({
      index: this.state.index + 1,
      correctCounter : this.state.correctCounter + (correctAnswer ? 1 : 0),
      showCurrentAnswer: false,
    })
  }

  render() {
    const { index, showCurrentAnswer } = this.state
    console.log('index: ' + index)
    const { deck } = this.props.navigation.state.params
    const questions = deck.questions
    if (index === questions.length ) {
      const { correctCounter } = this.state
      return (
        <View style={styles.col}>
            <Text style={styles.title}> Quiz Result </Text>
            <Text style={styles.subtitle}> Score : {correctCounter}/{questions.length} </Text>
            <TextButton onPress={() => this.setState(TakeQuiz.getDefaultState())}>
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
        <View style={styles.col}>
          <Text style={styles.title}> Question {index + 1} of {questions.length} </Text>
          <Text style={styles.subtitle}>{question.question}</Text>
          <Text style={styles.title}> Answer: </Text>
          {showCurrentAnswer ?
            <Text style={styles.subtitle}>{question.answer}</Text>
            :
            <TextButton onPress={() => this.setState({...this.state, showCurrentAnswer:true})}>
              Show Answer
            </TextButton>
          }
          {showCurrentAnswer ? <TextButton onPress={() => this.answerQuestion(true)}>Correct</TextButton> : ""}
          {showCurrentAnswer ? <TextButton onPress={() => this.answerQuestion(false)}>Inorrect</TextButton> : ""}

        </View>
      )
    }
  }
}

export default TakeQuiz
