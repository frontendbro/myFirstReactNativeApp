import {createStackNavigator} from 'react-navigation'
import HomeScreen from './HomeScreen'
import {HOME, DETAILS} from '../routes'
import DetailsScreen from './DetailsScreen'

export default createStackNavigator(
  {
    [HOME]: HomeScreen,
    [DETAILS]: DetailsScreen
  },
  {
    headerMode: 'none'
  }
)
