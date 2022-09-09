import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { nanoid } from 'nanoid/non-secure'
import {
  en_color,
  errorSound,
  fetchJson,
  getRandomItem,
  green,
  W,
  white,
  winSound
} from '../../../constants'
import { emojiT } from '../../../types/LessonTypes'
import { ButtonEmoji, Text, Space, Header, Loading } from '../../'
import { s, vs } from 'react-native-size-matters'
import Sound from 'react-native-sound'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'
import { useTheme } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'
import { goPrevious } from '../../../slices'

const lineW = W / 1.85

export function EmojiSelect({ onWin, url }: EmojiSelectT) {
  // STATES
  const [variants, setVariants] = useState([])
  const [load, setLoad] = useState(true)
  const [correct, setCorrect] = useState<emojiT>()
  const [isTrue, setIsTrue] = useState<boolean>(true)

  // SHARED VALUE
  const step = useSharedValue(0)
  const score = useSharedValue(0)
  // REFS
  const soundRef = useRef<Sound>()
  const buttons = useRef<emojiT[]>([])
  const max = useRef<number>(0)
  const forPass = useRef<emojiT[]>([])
  // OTHER HOOKS
  const { bottom } = useSafeAreaInsets()
  const dispatch = useDispatch()
  const { dark } = useTheme()

  const fetchEmojiData = async () => {
    setLoad(true)
    const res = await fetchJson(url)
    const maxLength = 1 //res.length > 405 ? 400 : res.length > 112 ? 110 : res.length - 1
    max.current = maxLength
    step.value = lineW / maxLength
    setVariants(res)
    setLoad(false)
  }
  useEffect(() => {
    fetchEmojiData()
  }, [])

  const initTest = async () => {
    const vars: emojiT[] = variants.reduce((pr, cur, id) => {
      if (id < 9) {
        let newItem: emojiT | undefined = undefined
        do {
          newItem = getRandomItem(variants)
        } while (pr.findIndex((a: emojiT) => a.name === newItem?.name) !== -1)
        return [...pr, newItem]
      } else {
        return pr
      }
    }, [] as any)
    let correctAnswer: emojiT = getRandomItem(vars)
    while (forPass.current.findIndex(a => a.name === correctAnswer.name) >= 0) {
      correctAnswer = getRandomItem(vars)
    }
    forPass.current.push(correctAnswer)
    const soundObj = new Sound(correctAnswer.url, undefined, err => {
      if (!err && score.value <= max.current) soundObj.play()
    })

    if (score.value >= max.current) {
      score.value = score.value + 1
      setTimeout(() => {
        onWin && onWin()
      }, 200)
    } else {
      soundRef.current = soundObj
      buttons.current = vars
      setCorrect(correctAnswer)
      score.value = score.value + 1
    }
  }
  useEffect(() => {
    if (!load) initTest()
  }, [load])
  const onChoice = async (item: emojiT, index: number) => {
    const isCorrect = item.id === correct?.id
    if (isCorrect) {
      setIsTrue(true)
      initTest()
    } else {
      errorSound.play()
      setIsTrue(false)
      score.value = 1
    }
  }
  const handlePlay = () => {
    if (soundRef.current) {
      soundRef.current.play(() => {})
    }
  }
  const handleBack = () => {
    dispatch(goPrevious())
  }

  const animLine = useAnimatedStyle(() => {
    return {
      width: withTiming((score.value - 1) * step.value)
    }
  })
  const title = correct?.title
  return load ? (
    <Loading color={white} />
  ) : (
    <View style={flexOne}>
      <Header
        textColor={dark ? en_color : white}
        nameIconL=":back:"
        onPressL={handleBack}
        onPressR={handlePlay}
        nameIconR=":loud_sound:"
        title={title ? (title.length > 1 ? title : ' ') : '...'}
      />
      <View>
        <View style={lineContainer}>
          <Animated.View style={[animLine, line]} />
        </View>
        <Space height={vs(55)} />
        <Text
          centerText
          oneColor={isTrue ? green : 'red'}
          h3
          fontSize={s(20)}
          title={isTrue ? 'true' : 'false'}
        />
        <Space height={vs(35)} />
        <FlatList
          numColumns={3}
          style={{ marginHorizontal: s(30) }}
          data={buttons.current}
          renderItem={({ item, index }) => (
            <View style={emojiStyle}>
              <ButtonEmoji
                textColor={dark ? undefined : white}
                onPress={() => onChoice(item, index)}
                name={item.name}
              />
            </View>
          )}
          keyExtractor={() => nanoid()}
        />
        <Space height={bottom + vs(20)} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  emojiStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: vs(5)
  },
  line: {
    height: vs(7),
    backgroundColor: white
  },
  lineContainer: {
    width: lineW + vs(2),
    alignSelf: 'center',
    height: vs(9),
    borderRadius: vs(9),
    overflow: 'hidden',
    borderWidth: vs(1),
    borderColor: white
  },
  flexOne: {
    flex: 1,
    justifyContent: 'space-between'
  },
  bottomCont: {}
})
const { emojiStyle, line, lineContainer, flexOne, bottomCont } = styles

interface EmojiSelectT {
  url: string // emojiT[]
  onWin: () => void
}
