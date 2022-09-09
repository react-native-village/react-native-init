import { RouteProp, useFocusEffect } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { Appearance, View } from 'react-native'
import { examComplete, schemeToggle } from '../../../slices'
import { useTypedDispatch, useTypedSelector } from '../../../store'
import { RootStackParamList } from '../../../types'
import { SelectQuestType, WinScreen } from '../TypesOfLessons'

export function ExamScreen({ navigation, route }: ExamScreenT) {
  const [questId, setQuestId] = useState(0)
  const { questions, part } = route.params
  const dispatch = useTypedDispatch()
  const lastId = questions.length - 1
  const bg = useTypedSelector(st => st.bgColor.bgWithScheme)
  useFocusEffect(() => {
    const sub = Appearance.addChangeListener(({ colorScheme }) => {
      dispatch(schemeToggle(colorScheme === 'dark'))
    })
    return () => sub.remove()
  })
  const onWin = () => {
    if (questId === lastId) {
      dispatch(examComplete(part))
    }
    setQuestId(pr => pr + 1)
  }
  return (
    <View style={{ flex: 1, backgroundColor: bg }}>
      {questId === lastId + 1 ? (
        <WinScreen title="Вы прошли экзамен!!!" />
      ) : (
        <SelectQuestType onWin={onWin} {...questions[questId]} />
      )}
    </View>
  )
}

interface ExamScreenT {
  navigation: NativeStackNavigationProp<RootStackParamList, 'EXAM_SCREEN'>
  route: RouteProp<RootStackParamList, 'EXAM_SCREEN'>
}
