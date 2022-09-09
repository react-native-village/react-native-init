import React, { memo, useState } from 'react'
import { Image, StyleProp, ViewStyle, TouchableOpacity } from 'react-native'
import { ScaledSheet, s } from 'react-native-size-matters'
import { W, H } from '../../constants'
import { Loading } from '../Loading'
import { ButtonIconCircle } from '../ButtonIconCircle'
import { EmojiView } from '../EmojiView'
import { useOrientation } from '../../hooks'

const styles = ScaledSheet.create({
  container: {
    alignSelf: 'center'
  },
  imageStyle: {
    borderRadius: 20
  },
  iconStyle: {
    alignSelf: 'flex-end',
    right: s(10),
    bottom: s(50)
  },
  emojiView: {
    alignSelf: 'flex-start',
    position: 'absolute',
    top: s(10),
    left: s(10)
  }
})

interface CardT {
  admin: boolean
  onPress?: () => void
  onPressAdmin?: () => void
  viewStyle?: StyleProp<ViewStyle>
  done: boolean
  item: {
    title: string
    img: string
  }
}

const Card = memo(({ done, admin, item, onPress, onPressAdmin, viewStyle }: CardT) => {
  const [value, setValue] = useState<boolean>(false)
  const { container, imageStyle, iconStyle, emojiView } = styles
  const { img } = item
  const orientation = useOrientation()
  const height = orientation === 'LANDSCAPE' ? H - s(150) : W - 20
  const width = orientation === 'LANDSCAPE' ? H - s(150) : W - 20

  return (
    <TouchableOpacity onPress={onPress} style={[container, viewStyle]}>
      <Image style={[imageStyle, { height, width }]} source={{ uri: img }} onLoadEnd={(): void => setValue(true)} />
      {!value && <Loading type="Pulse" />}
      {admin && <ButtonIconCircle name=":lower_left_ballpoint_pen:" viewStyle={iconStyle} onPress={onPressAdmin} />}
      {done && <EmojiView name=":heavy_check_mark:" fontSize={s(40)} viewStyle={emojiView} />}
    </TouchableOpacity>
  )
})

export { Card }
