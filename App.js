import React, {Component} from 'react'
import {View, StyleSheet, Dimensions} from 'react-native'
import Header from './src/components/uikit/Header'
import TestCard from './src/components/uikit/TestCard'

const url = 'http://moezdorovie.org:8040/api/v2/quizzes'

export default class App extends Component {
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

  handleClickx = () => {
    console.log('object')
  }

  render() {
    return (
      <View style={styles.body}>
        <Header title={this.state.title} />
        {this.state.data.map(item => <TestCard key={item.id} title={item.name} handleClick={this.handleClickx} description='Список обследований, который положен вам бесплатно по полису ОМС' />)}
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
