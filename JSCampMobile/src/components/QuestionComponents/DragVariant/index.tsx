import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text as RNText } from 'react-native'
import { DragVariantT } from '../../../types/LessonTypes'
import { Text, ButtonSubmit } from '../../'
import { s, vs } from 'react-native-size-matters'
import { Space } from '../../Space'
import { nanoid } from 'nanoid/non-secure'
import { shuffle } from '../../../constants'
import { TextFormatter } from './TextFormated'
import { BlockElement } from './BlockElement'
import { useTypedDispatch, useTypedStore } from '../../../store'
import { removeAllEnd, reset } from './DragAndDropSlice'

export function DragVariant({ questionText, fakeWords, onWin }: DragComponentT) {
  const formattedText = questionText.split(/~[^~]+~/g)
  const skippedWords = questionText.match(/~[^~]+~/g)?.map(a => a.replace(/^.|.$/g, ''))
  const allVariants = shuffle([
    ...fakeWords,
    ...(skippedWords ? skippedWords : ['noWorkTest'])
  ])
  const lastId = formattedText.length - 1
  const store = useTypedStore()
  const dispatch = useTypedDispatch()
  useEffect(() => {
    return () => {
      // обязательно эти 2
      dispatch(reset(true))
    }
  })
  const handleWin = () => {
    onWin && onWin()
    dispatch(reset())
    setTimeout(() => dispatch(removeAllEnd()), 1000)
  }

  const onSubmit = () => {
    if (skippedWords) {
      const blocksOrder = store.getState().DragAndDrop.responseOrder
      const sortedArr = [...blocksOrder].sort((a, b) => a.id - b.id)
      const isEqual =
        blocksOrder.length === skippedWords.length &&
        skippedWords.every((el, index) => {
          return el === sortedArr[index].text
        })
      return isEqual
    } else {
      return true
    }
  }
  return (
    <View style={container}>
      <Text centerText h4 title="Поместите ответы в нужное место" />
      <Space height={vs(20)} />
      <View style={textCont}>
        {formattedText.map((words, id) => (
          <TextFormatter key={nanoid()} lastId={lastId} id={id} words={words} />
        ))}
      </View>
      <Space height={vs(30)} />
      <View style={variantsCont}>
        {allVariants.map((a, id) => {
          return <BlockElement key={nanoid()} item={a} index={id} />
        })}
      </View>
      <Space height={vs(60)} />
      <ButtonSubmit onWin={handleWin} onSubmit={onSubmit} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: s(10),
    paddingTop: vs(20)
  },
  textCont: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  variantsCont: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})

const { container, textCont, variantsCont } = styles

interface DragComponentT extends DragVariantT {
  onWin?: () => void
}
