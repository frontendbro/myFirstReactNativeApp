import React from 'react'
import { View, Image, Text, StyleSheet, Button } from 'react-native'
import {w} from './constants'

console.log(w)

const QuestionCard = ({ title, srcImg }) => {
  return (
    <View style={styles.box}>
      <Image
        style={styles.img}
        // source={{ uri: { srcImg} }}
      />
      <View style={styles.txt}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Button title='Далее' />
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    backgroundColor: '#fff',
    borderRadius: 21,
    width: 270,
    marginTop: 20,
    height: 170
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

export default QuestionCard
