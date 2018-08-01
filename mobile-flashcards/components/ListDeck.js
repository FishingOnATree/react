import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { loadDecks } from '../actions'
import { getDecks } from '../utils/api'
import ShowDeck from './ShowDeck'
import styles from '../styles'

class ListDeck extends Component {
  //get decks from AsyncStorage
  componentDidMount() {
    getDecks().then ((result => {
        this.props.dispatch(loadDecks(result))
    }))
  }

  render() {
    const { decks } = this.props
    return (
      <View style={styles.row}>
        <ScrollView>
          {Object.keys(decks).length>0 ?
            Object.keys(decks).map((title) => (
            <TouchableOpacity
              style={styles.deck}
              key={title}
              onPress={() => this.props.navigation.navigate('ShowDeck', { title })}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.cards}>{decks[title].questions.length} cards</Text>
            </TouchableOpacity>
            ))
            :
            <Text style={styles.deckNone}>No deck available</Text>
          }
        </ScrollView>
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

export default connect(mapStateToProps)(ListDeck)
