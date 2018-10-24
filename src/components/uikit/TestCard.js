import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const TestCard = ({title, description}) => {
  return (
    <View style={styles.card}>
      <View style={styles.img} />
      <View style={styles.txt}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
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
