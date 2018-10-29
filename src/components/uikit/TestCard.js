import React from 'react'
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { w, h } from './constants'

const TestCard = ({title, description, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.img}
          source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
        />
        <View style={styles.txt}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
    
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
    flexDirection: 'row'
  },
  img: {
    backgroundColor: '#E5E5E5',
    borderRadius: 7,
    width: 58,
    height: 58,
    marginRight: 10
  },
  txt: {
    flexDirection: 'column'
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
    width: '70%'
  },
  description: {
    fontSize: 10,
    width: '70%'
  }
})

export default TestCard
