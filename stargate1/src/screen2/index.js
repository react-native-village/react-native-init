import { createStackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import DetailsScreen from './DelailsScreen'
import { BATMAN_HOME, BATMAN_DETAILS } from '../routes'

export default createStackNavigator(
  {
    [BATMAN_HOME]: HomeScreen,
    [BATMAN_DETAILS]: DetailsScreen
  },
  {
    initialRouteName: BATMAN_HOME,
    headerMode: 'none'
  }
)
