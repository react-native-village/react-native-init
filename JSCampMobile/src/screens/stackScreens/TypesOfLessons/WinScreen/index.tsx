import React, { useCallback, useState } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Balloon, CenterView, Header, Space, Text } from '../../../../components'
// @ts-ignore
import Unicorn from '../../../../../assets/gif/unicorn.gif'
import { s, vs } from 'react-native-size-matters'
import { randomNumber, W, white, winSound } from '../../../../constants'
import { useTypedSelector } from '../../../../store'
import { useDispatch } from 'react-redux'
import { incrementSection, saveResult } from '../../../../slices'
import { useFocusEffect } from '@react-navigation/native'
import { nanoid } from 'nanoid/non-secure'

interface WinScreenT {
  title?: string
}
export function WinScreen({ title }: WinScreenT) {
  const { cardName, part, lessonId } = useTypedSelector(st => st.section)
  const [balloons, setBalloons] = useState<number[]>([])
  const dispatch = useDispatch()
  useFocusEffect(
    useCallback(() => {
      winSound.play()
      const balloonsCount = randomNumber(10, 18)
      let arr = []
      for (let i = 0; i < balloonsCount; i++) {
        arr.push(i)
      }
      setBalloons(arr)
    }, [])
  )
  const onExit = () => {
    dispatch(saveResult({ part, id: lessonId }))
    dispatch(incrementSection())
  }
  return (
    <View style={container}>
      <Header onPressL={onExit} nameIconL=":back:" textColor="white" title="Победа" />
      <Space height={vs(30)} />
      <Text h7 centerText oneColor={white} title={title ? title : cardName} />
      <CenterView>
        <View style={gifContainer}>
          <Image style={gifStyle} source={Unicorn} />
        </View>
      </CenterView>
      {balloons.map(a => (
        <Balloon key={a} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  gifStyle: {
    width: '100%',
    height: '100%'
  },
  gifContainer: {
    width: W / 1.5,
    height: W / 1.5,
    borderRadius: s(5),
    overflow: 'hidden'
  },
  container: {
    flex: 1
  },
  balloonContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  }
})
const { gifStyle, container, gifContainer, balloonContainer } = styles
