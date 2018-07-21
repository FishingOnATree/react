import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { loadDecks } from '../actions'
import { getDecks } from '../utils/api'
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
    //const navigate = this.props.navigation.navigate
    //onPress={() => navigate('DeckDetail', { deckTitle: key })} >
    console.log(decks);
    return (
      <ScrollView>
        <View style={styles.container}>
          {Object.keys(decks).length>0 ?
            Object.keys(decks).map((key) => (
            <TouchableOpacity
              style={styles.deck}
              key={key} >
              <Text style={styles.title}>{key}</Text>
              <Text style={styles.cards}>{decks[key].questions.length} cards</Text>
            </TouchableOpacity>
          ))
          :
          <Text style={styles.noDeck}>No deck added!</Text>
        }
        </View>
      </ScrollView>
    )
  }
}

function mapStateToProps(decks) {
  console.log(decks);
  return {
    decks
  }
}

export default connect(mapStateToProps)(ListDeck)
