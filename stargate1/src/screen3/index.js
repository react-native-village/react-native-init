import { createStackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import DetailsScreen from './DelailsScreen'
import {
  SPIDER_HOME,
  SPIDER_DETAILS
} from '../routes'

export default createStackNavigator(
  {
    [SPIDER_HOME]: HomeScreen,
    [SPIDER_DETAILS]: DetailsScreen
  },
  {
    initialRouteName: SPIDER_HOME,
    headerMode: 'none'
  }
)
