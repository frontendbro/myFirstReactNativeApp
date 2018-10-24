import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import Header from './src/components/uikit/Header'
import TestCard from './src/components/uikit/TestCard'

const url = 'http://moezdorovie.org:8040/api/v2/quizzes'

export default class App extends Component {
  state = {
    title: 'Тесты здоровья',
    data: []
  }

  componentDidMount = async () => {
    const response = await fetch(url)
    const data = await response.json()
    this.setState({data})
  }

  render() {
    return (
      <View style={styles.body}>
        <Header title={this.state.title} />
        {this.state.data.map(item => <TestCard key={item.id} title={item.name} description='Список обследований, который положен вам бесплатно по полису ОМС' />)}
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
