import React from 'react'
import { View, Image, Text, StyleSheet, Button } from 'react-native'
import {w} from './constants'

console.log(w)

const QuestionCard = ({ title, srcImg }) => {
  return (
    <View style={styles.box}>
      <Image
        style={styles.img}
        source={{ uri: 'https://images.unsplash.com/photo-1513756590375-87f7f681ae85?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=50c8b3ef630ee66dcf83582f777ce042&auto=format&fit=crop&w=1552&q=80' }}
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
