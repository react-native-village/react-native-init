import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { s, vs } from 'react-native-size-matters'
import { Button } from '../'
import { Text } from '../../'
import { green } from '../../../constants'

interface ButtonSubmitT {
  onSubmit: () => null | boolean
  onWin?: () => void
}

export function ButtonSubmit({ onSubmit, onWin }: ButtonSubmitT) {
  const [isCorrect, setIsCorrect] = useState<null | boolean>(null)
  const handlePress = () => {
    const isEqual = onSubmit()
    setIsCorrect(isEqual)
    setTimeout(() => {
      setIsCorrect(null)
      if (isEqual) {
        onWin && onWin()
      }
    }, 1500)
  }
  return (
    <View style={bottomView}>
      {isCorrect === null ? (
        <Button onPress={handlePress} title={'Проверить'} />
      ) : isCorrect === false ? (
        <Text h7 oneColor="red" title="Неверно" centerText />
      ) : (
        <Text h7 oneColor={green} title="Верно ✓" centerText />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  bottomView: {
    marginBottom: vs(30),
    height: s(70),
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const { bottomView } = styles
