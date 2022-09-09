import React from 'react'
import { TouchableOpacity, View, GestureResponderEvent } from 'react-native'
import { ScaledSheet, s, vs } from 'react-native-size-matters'
import { Text, ButtonSimpleEmoji } from '../'
import { Space } from '../Space'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useTheme } from '@react-navigation/native'

interface HeaderT {
  title?: string
  nameIconL?: string
  nameIconR?: string
  onPressL?: () => void
  onPressR?: () => void
  textColor?: string
}

const fontSize = s(30)

export function Header({
  title,
  nameIconL,
  nameIconR,
  onPressL,
  onPressR,
  textColor
}: HeaderT) {
  const {
    colors: { text, background, border }
  } = useTheme()
  const { top } = useSafeAreaInsets()
  const paddingTop = top + vs(7)
  return (
    <View style={[container, { paddingTop, borderBottomColor: border }]}>
      {nameIconL && (
        <ButtonSimpleEmoji onPress={onPressL} fontSize={fontSize} name={nameIconL} />
      )}
      {title && (
        <Text
          oneColor={textColor}
          h5
          title={title}
          numberOfLines={2}
          textStyle={titleStyle}
        />
      )}
      {nameIconR ? (
        <ButtonSimpleEmoji onPress={onPressR} fontSize={fontSize} name={nameIconR} />
      ) : !nameIconR ? (
        <Space width={fontSize * 1.6} />
      ) : null}
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: vs(7),
    paddingHorizontal: s(10)
  },
  titleStyle: {
    flex: 1,
    marginHorizontal: s(15),
    textAlign: 'center'
  }
})
const { container, titleStyle } = styles
