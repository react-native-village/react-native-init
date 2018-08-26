import { createStackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import DetailsScreen from './DelailsScreen'
import {
  STARGATE_HOME,
  STARGATE_DETAILS
} from '../routes'

export default createStackNavigator(
  {
    [STARGATE_HOME]: HomeScreen,
    [STARGATE_DETAILS]: DetailsScreen
  },
  {
    initialRouteName: STARGATE_HOME,
    headerMode: 'none'
  }
)
