import React from 'react'
import { StyleSheet, View } from 'react-native'
import { s } from 'react-native-size-matters'
import Spinner from 'react-native-spinkit'
import { primary } from '../../constants'

export function Loading({ color = primary }: LoadingT) {
  return (
    <View style={container}>
      <Spinner color={color} type="9CubeGrid" size={s(85)} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
const { container } = styles

interface LoadingT {
  color?: string
}
