import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.welcome}>{title}</Text>
    </View>
  )
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

export default Header
