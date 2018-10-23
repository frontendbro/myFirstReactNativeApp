import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

//type Props = {};
export default class App extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.welcome}>Тесты здоровья</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3FC27B'
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#fff'
  }
})
