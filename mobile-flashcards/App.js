import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { Constants } from 'expo'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import AddDeck from './components/AddDeck'
import ListDeck from './components/ListDeck'
import ShowDeck from './components/ShowDeck'
import styles, { purple, white, blue } from './styles'


const Tabs = createBottomTabNavigator( {
  ListDeck: {
    screen: ListDeck,
    navigationOptions: {
      tabBarLabel: 'List',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    }
  },
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: purple,
    style: {
      height: 56,
      backgroundColor: white,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: Tabs,
      navigationOptions: {
        title: 'Home',
      }
    },
    ShowDeck: {
      screen: ShowDeck,
      navigationOptions: {
        title: 'Deck View'
      }
    }
  }, {
    navigationOptions: {
      headerStyle: {
        height: 20,
        backgroundColor: blue,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        justifyContent: 'space-between',
        textAlign: 'center',
      },
    }
  }
)

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
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
