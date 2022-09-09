import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { nanoid } from 'nanoid/non-secure'
import { RenderCircle } from './RenderCircle'
import { s } from 'react-native-size-matters'

export type progressElementT =
  | {
      percents: number
      isStarted: boolean
    }
  | 'complete'

interface ProgressChainT {
  text: string
  elements: progressElementT[]
  circleColor: string
}

export function ProgressChain({ elements, text, circleColor }: ProgressChainT) {
  return (
    <FlatList
      horizontal
      style={container}
      contentContainerStyle={content}
      data={elements}
      keyExtractor={() => nanoid()}
      renderItem={props => (
        <RenderCircle circleColor={circleColor} text={text} {...props} />
      )}
      ItemSeparatorComponent={() => (
        <View style={[horizontalLine, { backgroundColor: text }]} />
      )}
    />
  )
}

const styles = StyleSheet.create({
  horizontalLine: {
    height: s(2),
    width: s(15),
    borderRadius: s(2),
    alignSelf: 'center'
  },
  content: {
    justifyContent: 'center',
    margin: s(10)
  },
  container: {
    alignSelf: 'flex-end'
  }
})
const { horizontalLine, content, container } = styles
