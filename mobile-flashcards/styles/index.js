import { StyleSheet } from 'react-native'

export const purple = '#292477'
export const gray = '#757575'
export const white = '#fff'
export const red = '#b71845'
export const orange = '#f26f28'
export const blue = '#4e4cb8'
export const lightPurple = '#7c53c3'
export const pink = '#b93fb3'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    marginLeft: 15,
    marginRight: 15,
  },
  headingTitle: {
    fontSize: 30,

    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    fontSize: 20,
  },
  deck: {
    height: 100,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    borderBottomWidth: 1,
    borderColor: orange,
  },
  deckNone:{
    marginTop:50,
    marginBottom:50,
    alignItems: 'center',
    justifyContent: 'center',
    color: gray,
    fontSize:20,
  },
  title: {
    fontSize: 20,
  },
  warning: {
    color: red,
  },
  cards:{
    color: blue
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  input_ios: {
    height: 60,
    width: 300,
    fontSize: 18,
    marginBottom: 20,
    borderBottomWidth: 1,
  },
})

export default styles
