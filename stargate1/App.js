import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from 'react-navigation'
import Tab1 from './src/tab1'
import Tab2 from './src/tab2'
import Tab3 from './src/tab3'
import { BLUE } from './constants'

export default createBottomTabNavigator(
  {
    Stargate: Tab1,
    Batman: Tab2,
    Spiderman: Tab3
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'Stargate') {
          iconName = focused ? 'ios-videocam' : 'ios-play'
        } else if (routeName === 'Batman') {
          iconName = focused ? 'ios-videocam' : 'ios-play'
        } else if (routeName === 'Spiderman') {
          iconName = focused ? 'ios-videocam' : 'ios-play'
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />
      }
    }),
    tabBarOptions: {
      activeTintColor: BLUE,
      inactiveTintColor: 'gray'
    }
  }
)
