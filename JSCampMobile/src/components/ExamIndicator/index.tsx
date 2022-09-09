import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { useTypedDispatch, useTypedSelector } from '../../store'
import { allPartsT, questionsT } from '../../types/LessonTypes'
import CircularProgress from 'react-native-circular-progress-indicator'
import { s } from 'react-native-size-matters'
import { white } from '../../constants'
import { useNavigation, useTheme } from '@react-navigation/native'
import { Text } from '../TextComponents'
import { ButtonVectorIcon } from '../Buttons'
import { RootStackParamList } from '../../types'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { toggleColor } from '../../slices'

export function ExamIndicator({ part, questions, dark = false }: ExamIndicatorT) {
  const {
    colors: { background }
  } = useTheme()
  const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const dispatch = useTypedDispatch()
  const { courseLength, passed, exams } = useTypedSelector(st => st.profile)
  // const percent = (121 / 456) * 100
  const isCompleted = exams[part]
  const percent = Math.ceil((passed[part].length / courseLength[part]) * 100)
  const handlePress = () => {
    if (questions) {
      dispatch(toggleColor(part))
      navigate('EXAM_SCREEN', { questions, part })
    }
  }
  return (
    <View style={container}>
      <CircularProgress
        value={isNaN(percent) ? 0 : percent > 100 ? 100 : percent}
        maxValue={100}
        radius={s(35)}
        progressFormatter={n => {
          'worklet'
          return `${Math.ceil(n)}%`
        }}
        progressValueStyle={{
          fontFamily: 'Avenir Next',
          fontWeight: 'normal'
        }}
        progressValueColor={white}
        activeStrokeColor={white}
        activeStrokeWidth={s(4)}
        inActiveStrokeWidth={s(1.5)}
        inActiveStrokeColor={white}
        inActiveStrokeOpacity={0.3}
      />
      {questions && (
        <>
          <TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
            <Text oneColor={dark ? undefined : white} h9 title={'Экзамен'} />
          </TouchableOpacity>
          <ButtonVectorIcon
            onPress={handlePress}
            color={dark ? undefined : white}
            size={s(40)}
            name={isCompleted ? 'checkbox-outline' : 'checkbox-blank-outline'}
          />
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
})

const { container } = styles

interface ExamIndicatorT {
  part: allPartsT
  questions?: questionsT[]
  dark?: boolean
}
