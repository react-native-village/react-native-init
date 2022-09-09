import React, { useState } from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View
} from 'react-native'
import { inputAnswerT } from '../../../types/LessonTypes'
import { Input, Text } from '../../'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Button, ButtonSubmit } from '../../Buttons'
import { s, vs } from 'react-native-size-matters'
import { Space } from '../../Space'
import { useHeaderHeight } from '@react-navigation/elements'

const schema = yup
  .object()
  .shape({
    answer: yup.string().required('Введите ответ')
  })
  .required()

interface thisT extends inputAnswerT {
  onWin: () => void
}

const answerName = 'answer'

export function InputAnswer({ questionText, correctAnswer, onWin }: thisT) {
  const { ...methods } = useForm({
    mode: 'all',
    reValidateMode: 'onChange',
    criteriaMode: 'all',
    resolver: yupResolver(schema)
  })
  const headerH = useHeaderHeight()

  const handleSubmit = () => {
    const value = methods.getValues()[answerName].toLowerCase().trim()
    if (!methods.formState.isValid && value === '') {
      return false
    } else {
      const isEqual = value === correctAnswer.toLowerCase().trim()
      return isEqual
    }
  }
  const handleWin = () => {
    methods.reset()
    onWin && onWin()
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={container}
      keyboardVerticalOffset={headerH}
    >
      <ScrollView>
        <FormProvider {...methods}>
          <Space height={vs(20)} />
          <Text h6 title={'  Вопрос:'} />
          <View style={questionCard}>
            <Text h4 title={questionText} />
          </View>
          <Space height={vs(50)} />
          <Input type="underline" name={answerName} placeholder="Ваш ответ" />
          <Space height={vs(15)} />
          <ButtonSubmit onWin={handleWin} onSubmit={handleSubmit} />
          <Space height={vs(50)} />
        </FormProvider>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  questionCard: {
    borderWidth: s(1),
    marginHorizontal: s(10),
    padding: s(15),
    paddingBottom: s(20),
    borderRadius: s(15),
    marginTop: vs(20)
  },
  container: {
    flex: 1
  }
})

const { questionCard, container } = styles
