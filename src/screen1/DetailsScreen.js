import React, {PureComponent} from 'react'
import {View, Text } from 'react-native'
import Header from '../components/uikit/Header'

class DetailsScreen extends PureComponent {
  render() {
    const {image, name, summary} = this.props.navigation.state.params
    const {navigation} = this.props
    return (
      <View>
        <Header title={name} />
        <Text>Hello world</Text>
      </View>
    )
  }
}

export default DetailsScreen
