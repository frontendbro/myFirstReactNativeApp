import React, {PureComponent} from 'react'
import {View } from 'react-native'
import Header from '../components/uikit/Header'
import QuestionCard from '../components/uikit/QuestionCard'

const url = 'http://moezdorovie.org:8040/api/v2/quizzes'
class DetailsScreen extends PureComponent {
  state = {
    dataQuestions: []
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      this.setState({ dataQuestions: data[0].questions })
    } catch (error) {
      throw error
    }
    console.log(this.state.dataQuestions)
  };

  render() {
    const { dataQuestions } = this.state
    /* const {image, name, summary} = this.props.navigation.state.params
    const {navigation} = this.props */
    return (
      <View>
        <Header title="Тест здоровья" />
        <View>
          {dataQuestions.map(item => <QuestionCard title={item.text} srcImg={item.picture} />)}
        </View>
      </View>
    )
  }
}

export default DetailsScreen
