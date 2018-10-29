import React, { Component } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import Header from '../components/uikit/Header'
import TestCard from '../components/uikit/TestCard'
import { DETAILS } from '../routes'

const url = 'http://moezdorovie.org:8040/api/v2/quizzes'

export default class HomeScreen extends Component {
  state = {
    title: 'Тесты здоровья',
    data: []
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      this.setState({ data })
    } catch (error) {
      throw error
    }
  }

  render() {
    const {title, data} = this.state
    const {navigation} = this.props
    return (
      <View style={styles.body}>
        <Header title={title} />
        {this.state.data.map(item => <TestCard key={item.id} onPress={() => navigation.navigate(DETAILS, (item.title))} title={item.name} description='Список обследований, который положен вам бесплатно по полису ОМС' />)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#f8f8f8',
    height: '100%'
  }
})
