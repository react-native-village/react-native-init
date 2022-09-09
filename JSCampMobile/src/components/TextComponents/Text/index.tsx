import React from 'react'
import {
  StyleProp,
  TextStyle,
  Text as RNText,
  TextProps,
  StyleSheet,
  useColorScheme
} from 'react-native'
import { useTheme } from '@react-navigation/native'
import { s } from 'react-native-size-matters'
import { primary, secondary, Etna, KLMN, Narrow } from '../../../constants'

const styles = StyleSheet.create({
  h0Style: {
    fontSize: s(12),
    fontFamily: KLMN
  },
  h1Style: {
    fontSize: s(15),
    fontFamily: KLMN,
    textShadowOffset: { width: s(1), height: s(1) },
    textShadowRadius: s(1)
  },
  h2Style: {
    fontSize: s(15),
    fontFamily: 'Avenir Next',
    textAlign: 'center'
  },
  h3Style: {
    fontSize: s(16),
    fontFamily: Narrow
  },
  h4Style: {
    fontSize: s(18.5),
    fontFamily: Etna
  },
  h5Style: {
    fontSize: s(23),
    fontFamily: 'Avenir Next',
    fontWeight: 'bold'
  },
  h6Style: {
    fontSize: s(30),
    fontFamily: Etna,
    textShadowOffset: { width: s(2), height: s(1) },
    textShadowRadius: s(1)
  },
  h7Style: {
    fontSize: s(30),
    fontFamily: 'Avenir Next',
    fontWeight: 'bold'
  },
  h8Style: {
    fontSize: s(30),
    fontFamily: 'Avenir Next',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  h9Style: {
    fontSize: s(35),
    fontFamily: Etna
  },
  h10Style: {
    fontSize: s(150),
    fontFamily: Etna
  },
  bodyStyle: {
    fontSize: s(13),
    fontFamily: KLMN
  }
})

interface TwoColorsT {
  dark: string
  light: string
}

export type FontType = {
  h0?: boolean
  h1?: boolean
  h2?: boolean
  h3?: boolean
  h4?: boolean
  h5?: boolean
  h6?: boolean
  h7?: boolean
  h8?: boolean
  h9?: boolean
  h10?: boolean
  bodyH?: boolean
}

export interface TextT extends TextProps, FontType {
  title?: string
  colors?: TwoColorsT
  oneColor?: string
  textStyle?: StyleProp<TextStyle>
  centerText?: boolean
  fontSize?: number
}

export const Text = ({
  h0,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  h7,
  h8,
  h9,
  h10,
  bodyH,
  // no H
  title,
  oneColor,
  colors,
  textStyle,
  centerText,
  fontSize,
  ...otherProp
}: TextT) => {
  const {
    colors: { text }
  } = useTheme()
  const scheme = useColorScheme()
  const isDark = scheme === 'dark'
  const textShadowColor = isDark ? primary : secondary

  const curColor = oneColor
    ? oneColor
    : colors
    ? isDark
      ? colors.light
      : colors.dark
    : text

  const {
    h0Style,
    h1Style,
    h2Style,
    h3Style,
    h4Style,
    h5Style,
    h6Style,
    h7Style,
    h8Style,
    h9Style,
    h10Style,
    //h11Style,
    bodyStyle
  } = styles
  return (
    <RNText
      style={[
        h0 && h0Style,
        h1 && h1Style,
        h2 && h2Style,
        h3 && h3Style,
        h4 && h4Style,
        h5 && h5Style,
        h6 && h6Style,
        h7 && h7Style,
        h8 && h8Style,
        h9 && h9Style,
        h10 && h10Style,
        //h11 && h11Style,
        bodyH && bodyStyle,
        centerText && { textAlign: 'center' },
        { color: curColor, textShadowColor },
        fontSize ? { fontSize } : {},
        textStyle
      ]}
      {...otherProp}
    >
      {title ? title : ' '}
    </RNText>
  )
}
