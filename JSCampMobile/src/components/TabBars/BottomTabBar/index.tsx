import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { useTheme } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { mvs, s, vs } from 'react-native-size-matters'
import { useTypedSelector } from '../../../store'
import { Tab } from '../Tab'

export function BottomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { index, routes } = state
  const { bottom } = useSafeAreaInsets()
  const handlePress = (name: string, isFocused: boolean) => {
    if (!isFocused) {
      navigation.navigate('BOTTOM_TABS', {
        screen: name,
        merge: true
      })
    }
  }
  const { lineColor } = useTypedSelector(st => st.tabBar)
  const {
    colors: { border }
  } = useTheme()
  const paddingBottom = bottom + s(5)
  return (
    <View style={[tabContainer, { paddingBottom, borderColor: lineColor }]}>
      {routes.map(({ name, key }, id) => {
        const isFocused = index === id
        const suffix = isFocused ? '_ACTIVE' : ''
        return (
          <Tab
            key={id}
            onPress={() => handlePress(name, isFocused)}
            icon={`${name}${suffix}`}
          />
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  tabContainer: {
    paddingTop: vs(5),
    flexDirection: 'row',
    borderTopWidth: s(1.5)
  }
})
const { tabContainer } = styles
