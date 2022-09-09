import React, { useEffect } from 'react'
import { NavigationContainer, useFocusEffect } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { UI } from './UI'
import { RootBottomTabParamList, RootStackParamList, RootTopTabParamList } from './types'
import { black, darkTheme, gray, lightTheme, navRef, white } from './constants'
import {
  AwsScreen,
  EnScreen,
  JsScreen,
  RnScreen,
  TsScreen,
  LessonScreen,
  ExamScreen
} from './screens'
import { BottomTabBar, TopTabBar } from './components'
import { StatusBar, useColorScheme } from 'react-native'
import { useTypedDispatch, useTypedSelector } from './store'
import SystemNavigationBar from 'react-native-system-navigation-bar'
import Orientation from 'react-native-orientation-locker'
import { delColors } from './slices'

const Stack = createNativeStackNavigator<RootStackParamList>()
const BottomTab = createBottomTabNavigator<RootBottomTabParamList>()
const TopTab = createMaterialTopTabNavigator<RootTopTabParamList>()

export function Navigation() {
  const isDark = useColorScheme() === 'dark'
  const bgState = useTypedSelector(state => state.bgColor.bgWithScheme)
  const barStyle = isDark ? 'light-content' : 'dark-content'
  const bg = bgState ? bgState : isDark ? black : white
  // SystemColors
  useEffect(() => {
    SystemNavigationBar.setNavigationColor(bg, !isDark ? false : true)
    SystemNavigationBar.setNavigationBarDividerColor(gray)
  }, [bgState, isDark])
  useEffect(() => {
    Orientation.lockToPortrait()
  }, [])
  const theme = isDark ? darkTheme : lightTheme
  return (
    <NavigationContainer theme={theme} ref={navRef}>
      <StatusBar barStyle={barStyle} backgroundColor={bg} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="BOTTOM_TABS"
      >
        <Stack.Screen name="UI" component={UI} />
        <Stack.Screen name="BOTTOM_TABS" component={BottomTabNavigation} />
        <Stack.Group
          screenOptions={{
            animation: 'slide_from_right'
          }}
        >
          <Stack.Screen name="LESSON_SCREEN" component={LessonScreen} />
          <Stack.Screen name="EXAM_SCREEN" component={ExamScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function BottomTabNavigation() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false
      }}
      tabBar={props => <BottomTabBar {...props} />}
    >
      <BottomTab.Screen name="TOP_TABS" component={TopTabNavigation} />
      {/* <BottomTab.Screen name="QR_SCREEN" component={UI} /> */}
    </BottomTab.Navigator>
  )
}

function TopTabNavigation() {
  const dispatch = useTypedDispatch()
  useFocusEffect(() => {
    dispatch(delColors())
  })
  return (
    <TopTab.Navigator tabBar={props => <TopTabBar {...props} />}>
      <TopTab.Screen name="EN_SCREEN" component={EnScreen} />
      <TopTab.Screen name="JS_SCREEN" component={JsScreen} />
      <TopTab.Screen name="RN_SCREEN" component={RnScreen} />
      <TopTab.Screen name="TS_SCREEN" component={TsScreen} />
      <TopTab.Screen name="AWS_SCREEN" component={AwsScreen} />
    </TopTab.Navigator>
  )
}
