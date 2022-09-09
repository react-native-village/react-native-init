import { useFocusEffect } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View, Appearance } from 'react-native'
import { schemeToggle } from '../../../slices'
import { useTypedDispatch, useTypedSelector } from '../../../store'
import {
  EmojiLearnScreen,
  MarkdownScreen,
  QuestScreen,
  VideoSсreen,
  WinScreen
} from '../TypesOfLessons'

export function LessonScreen() {
  const sectionState = useTypedSelector(state => state.section)
  const type = sectionState.currentLesson?.type
  const bg = useTypedSelector(st => st.bgColor.bgWithScheme)
  const dispatch = useTypedDispatch()
  useFocusEffect(() => {
    const sub = Appearance.addChangeListener(({ colorScheme }) => {
      dispatch(schemeToggle(colorScheme === 'dark'))
    })
    return () => sub.remove()
  })

  return (
    <View style={[container, { backgroundColor: bg }]}>
      {type === 'video' ? (
        <VideoSсreen />
      ) : type === 'markdown' ? (
        <MarkdownScreen />
      ) : type === 'learn' ? (
        <MarkdownScreen />
      ) : type === 'emojiLearn' ? (
        <EmojiLearnScreen />
      ) : type === 'quest' ? (
        <QuestScreen />
      ) : type === 'win' ? (
        <WinScreen />
      ) : (
        <View />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
const { container } = styles
