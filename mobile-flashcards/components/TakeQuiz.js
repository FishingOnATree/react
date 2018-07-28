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
    const { deck } = this.props.navigation.state.params
    const questions = deck.questions
    if (index === questions.length ) {
      const { correctCounter } = this.state
      return (
        <View style={styles.col}>
          <View style={styles.smallbox}>
            <Text style={styles.title}> Quiz Result </Text>
            <Text style={styles.subtitle}> Score : {correctCounter}/{questions.length} </Text>
          </View>
          <View style={styles.smallbox}>
            <TextButton onPress={() => this.setState(TakeQuiz.getDefaultState())}>
              Restart quiz
            </TextButton>
          </View>
          <View style={styles.smallbox}>
            <TextButton
              onPress={() => this.props.navigation.dispatch(NavigationActions.back())}>
              Back to deck
            </TextButton>
          </View>
        </View>
      )
    } else {
      const navigate = this.props.navigation.navigate
      const question = questions[index]
      return (
        <View style={styles.col}>
          <View style={styles.smallbox}>
            <Text style={styles.title}> Question {index + 1} of {questions.length} </Text>
          </View>
          <View style={styles.smallbox}>
            <Text style={styles.subtitle}>{question.question}</Text>
          </View>
          <View style={styles.smallbox}>
            <Text style={styles.title}> Answer: </Text>
          </View>
          <View style={styles.smallbox}>
            {showCurrentAnswer ?
              <Text style={styles.answer}>{question.answer}</Text>
              :
              <TextButton onPress={() => this.setState({...this.state, showCurrentAnswer:true})}>
                Show Answer
              </TextButton>
            }
          </View>
          {showCurrentAnswer ?
            <View style={styles.smallbox}>
              <TextButton onPress={() => this.answerQuestion(true)}>Correct</TextButton>
            </View> : ""}
          {showCurrentAnswer ?
            <View style={styles.smallbox}>
              <TextButton onPress={() => this.answerQuestion(false)}>Inorrect</TextButton>
            </View> : ""}
        </View>
      )
    }
  }
}

export default TakeQuiz
