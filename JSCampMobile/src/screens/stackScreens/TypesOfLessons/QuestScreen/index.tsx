import React from 'react'
import { StyleSheet, View } from 'react-native'
import {
  DragVariant,
  EmojiSelect,
  Header,
  InputAnswer,
  SelectMany
} from '../../../../components'
import { vs } from 'react-native-size-matters'
import { questionsT } from '../../../../types/LessonTypes'
import { useTypedSelector } from '../../../../store'
import { useDispatch } from 'react-redux'
import { goPrevious, incrementSection } from '../../../../slices'

interface QuestScreenT {}

export function QuestScreen({}: QuestScreenT) {
  const { lessonData, currentLesson, sectionIndex } = useTypedSelector(st => st.section)
  const dispatch = useDispatch()
  if (!currentLesson?.question) return null
  const { question, header } = currentLesson
  const handleBack = () => {
    dispatch(goPrevious())
  }

  const onWin = () => {
    dispatch(incrementSection())
  }

  return (
    <View style={container}>
      {question.type !== 'emoji' && (
        <Header onPressL={handleBack} nameIconL=":back:" title={header} />
      )}
      <SelectQuestType onWin={onWin} {...question} />
    </View>
  )
}

interface SelectTypeT extends questionsT {
  onWin: () => void
}

export function SelectQuestType({
  type,
  drag,
  input,
  manySelect,
  emoji,
  onWin
}: SelectTypeT) {
  switch (type) {
    case 'drag':
      // @ts-ignore
      return <DragVariant onWin={onWin} {...drag} />
    case 'input':
      // @ts-ignore
      return <InputAnswer onWin={onWin} {...input} />
    case 'manySelect':
      // @ts-ignore
      return <SelectMany onWin={onWin} {...manySelect} />
    case 'emoji':
      // @ts-ignore
      return <EmojiSelect onWin={onWin} url={emoji?.dataUrl} />
    default:
      return null
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  videoContainer: {
    maxHeight: vs(200)
  }
})

const { container, videoContainer } = styles
