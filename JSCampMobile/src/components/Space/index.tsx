import React from 'react'
import { View } from 'react-native'

type SpaceT = {
  height?: number
  width?: number
}

export function Space({ height = 0, width = 0 }: SpaceT) {
  return <View style={{ height, width }} />
}
