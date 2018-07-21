import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { Constants } from 'expo'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { purple } from './utils/colors'
import reducer from './reducers'
import AddDeck from './components/AddDeck'
import ListDeck from './components/ListDeck'
import styles from './styles'


function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}} >
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
          <ListDeck />
        </View>
      </Provider>
    );
  }
}
