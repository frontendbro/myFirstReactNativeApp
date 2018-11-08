import React, {PureComponent} from 'react'
import {View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'
import Header from '../components/uikit/Header'
import QuestionCard from '../components/uikit/QuestionCard'

const url = 'http://moezdorovie.org:8040/api/v2/quizzes'

// class DetailsScreen extends PureComponent {
//   state = {
//     dataQuestions: []
//   };
//
//   componentDidMount = async () => {
//     try {
//       const response = await fetch(url)
//       const data = await response.json()
//       this.setState({ dataQuestions: data[0].questions })
//     } catch (error) {
//       throw error
//     }
//     console.log(this.state.dataQuestions)
//   };
//
//   render() {
//     const { dataQuestions } = this.state
//     /* const {image, name, summary} = this.props.navigation.state.params
//     const {navigation} = this.props */
//     return (
//
//       <ScrollView>
//         <Header title="Тест здоровья" />
//         <View>
//           {dataQuestions.map(item => <QuestionCard title={item.text} srcImg={item.picture} />)}
//         </View>
//       </ScrollView>
//     )
//   }
// }

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' }
    ],
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

  FirstRoute = () => (
    <ScrollView>
      <Header title="Вопрос №1" />
      <View>
        {this.state.dataQuestions.map(item => <QuestionCard title={item.text} srcImg={item.picture} />)}
      </View>
    </ScrollView>
  )

  SecondRoute = () => (
    <View>
      <Header title="Вопрос №2" />
      <View>
        {this.state.dataQuestions.map(item => <QuestionCard title={item.text} srcImg={item.picture} />)}
      </View>
    </View>
  )

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: this.FirstRoute,
          second: this.SecondRoute
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    )
  }
}

// export default DetailsScreen
