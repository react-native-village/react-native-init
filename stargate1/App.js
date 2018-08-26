import React from 'react'
//import { createDrawerNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation'
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import One from './src/screen1'
import Two from './src/screen2'
import Three from './src/screen3'
import { BLUE } from './constants'

export default createBottomTabNavigator(
  {
    Stargate: One,
    Batman: Two,
    Spiderman: Three 
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

//export default createDrawerNavigator(
//{
//Screen1: {
//screen: One,
//navigationOptions: {
//drawerLabel: 'Star Gate',
//drawerIcon: ({ tintColor }) => (
//<MaterialIcons name="grade" size={24} style={{ color: tintColor }} />
//)
//}
//},
//Screen2: {
//screen: Two,
//navigationOptions: {
//drawerLabel: 'Batman',
//drawerIcon: ({ tintColor }) => (
//<MaterialIcons name="favorite" size={24} style={{ color: tintColor }} />
//)
//}
//},
//Screen3: {
//screen: Three,
//navigationOptions: {
//drawerLabel: 'Spiderman',
//drawerIcon: ({ tintColor }) => (
//<MaterialIcons name="pets" size={24} style={{ color: tintColor }} />
//)
//}
//}
//},
//{
//initialRouteName: 'Screen1',
//contentOptions: {
//activeTintColor: BLUE,
//itemsContainerStyle: {
//marginVertical: 65
//}
//}
//}
//)
