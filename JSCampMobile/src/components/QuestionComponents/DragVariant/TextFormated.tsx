import React, { useEffect, useMemo, useRef } from 'react'
import { View, Text as RNText, StyleSheet } from 'react-native'
import { Text } from '../../'
import { useTheme } from '@react-navigation/native'
import { useTypedDispatch, useTypedSelector } from '../../../store'
import { update } from './DragAndDropSlice'
import { s, vs } from 'react-native-size-matters'
import { W } from '../../../constants'

interface TextFormatterT {
  lastId: number
  id: number
  words: string
}

const initW = s(55)
const initMargin = s(20)

export function TextFormatter({ lastId, id, words }: TextFormatterT) {
  const {
    colors: { border, card }
  } = useTheme()
  const ref = useRef<any>()
  const isLast = lastId === id
  const blocksOrder = useTypedSelector(state => state.DragAndDrop.responseOrder)
  const curBlock = blocksOrder.find(a => a.id === id)
  const dispatch = useTypedDispatch()
  useEffect(() => {
    // @ts-ignore
    ref?.current?.measure((fx, fy, width, height, px, py) => {
      const pointInfo = { width, height, px, py, id }
      dispatch(update(pointInfo))
    })
  }, [])

  return (
    <>
      <Text textStyle={textStyle} title={words} h2 />
      {!isLast && (
        <View
          ref={ref}
          style={[
            dropArea,
            { backgroundColor: card, borderColor: border },
            curBlock && {
              width: curBlock.width,
              borderWidth: 0,
              marginRight: initMargin - (curBlock.width - initW)
            }
          ]}
        />
      )}
    </>
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
    flexWrap: 'wrap',
    flexBasis: 300
  },
  dropArea: {
    borderRadius: s(5),
    height: s(22),
    width: initW,
    marginVertical: s(3),
    marginHorizontal: initMargin
  },
  textStyle: {
    lineHeight: s(26)
  },
  block: {
    height: s(22),
    marginHorizontal: s(10),
    marginVertical: s(5),
    borderRadius: s(5),
    padding: s(2)
  },
  variantsCont: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
})

const { dropArea, textStyle, textCont } = styles
