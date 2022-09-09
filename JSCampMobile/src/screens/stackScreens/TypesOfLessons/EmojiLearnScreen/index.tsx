import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { RootStackParamList } from '../../../../types'
import {
  CenterView,
  EmojiSlider,
  Header,
  Loading,
  Space,
  Text
} from '../../../../components'
import Emoji from 'react-native-emoji'
import { s, vs } from 'react-native-size-matters'
import { fetchJson, goBack, shuffle, white } from '../../../../constants'
import { emojiT } from '../../../../types/LessonTypes'
import Sound from 'react-native-sound'
import { useTypedDispatch, useTypedSelector } from '../../../../store'
import { goPrevious } from '../../../../slices'

const win = new Sound('win.mp3')

export function EmojiLearnScreen() {
  const { lessonData, currentLesson, sectionIndex } = useTypedSelector(st => st.section)
  const dataUrl = currentLesson?.contentUrl
  const [emojiData, setEmojiData] = useState<emojiT[]>()
  const [curEmoji, setCurEmoji] = useState<emojiT>()
  const [speed, setSpeed] = useState<number>(35)
  const curIndex = useRef<number>(0)
  const dispatch = useTypedDispatch()
  const fetchEmojiData = async () => {
    if (dataUrl) {
      const res = await fetchJson(dataUrl)
      setEmojiData(shuffle(res))
    }
  }
  useEffect(() => {
    fetchEmojiData()
  }, [])
  useEffect(() => {
    if (emojiData) {
      const timerId = setInterval(() => {
        if (curIndex.current !== emojiData.length - 1) {
          const soundObj = new Sound(emojiData[curIndex.current].url, undefined, () => {
            setCurEmoji(emojiData[curIndex.current])
            soundObj.play()
            curIndex.current = curIndex.current + 1
          })
        } else {
          win.play()
          dispatch(goPrevious())
        }
      }, 4500 - speed * 29)
      return () => clearInterval(timerId)
    }
  }, [emojiData, speed])
  const isSymbol = curEmoji?.name?.length === 1
  const title = curEmoji?.title
  return (
    <View style={container}>
      <Header
        onPressL={() => dispatch(goPrevious())}
        nameIconL=":back:"
        textColor={white}
        title={title && title.length > 1 ? curEmoji?.title : ' '}
      />
      {emojiData && curEmoji ? (
        <>
          <CenterView>
            {isSymbol ? (
              <Text h10 title={curEmoji.title} />
            ) : (
              <Emoji name={curEmoji.name} style={emojiStyle} />
            )}
            <Space height={vs(30)} />
            <Text oneColor={white} h8 title={curEmoji.ru} />
          </CenterView>
          <EmojiSlider
            initPercent={speed}
            onChange={e => setSpeed(e)}
            emojiR=":tiger:"
            emojiL=":turtle:"
          />
          <Space height={vs(45)} />
        </>
      ) : (
        <View style={container}>
          <Loading color={white} />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  emojiStyle: {
    fontSize: s(120)
  }
})

const { container, emojiStyle } = styles
