import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Appearance } from 'react-native'
import { en_color, rn_color, aws_color, ts_color, js_color, black } from '../constants'
import { allPartsT } from '../types/LessonTypes'

const initialState: initT = {
  bgColor: undefined,
  bgWithScheme: undefined
}

const allColors = {
  en: en_color,
  rn: rn_color,
  aws: aws_color,
  ts: ts_color,
  js: js_color
}

export const bgColorSlice = createSlice({
  name: 'bgColor',
  initialState,
  reducers: {
    setColor: (state, action: PayloadAction<string>) => {
      const isDark = Appearance.getColorScheme() === 'dark'
      if (!isDark) {
        state.bgColor = action.payload
      } else {
        state.bgColor = black
      }
    },
    toggleColor: (state, action: PayloadAction<allPartsT>) => {
      const isDark = Appearance.getColorScheme() === 'dark'
      if (!isDark) {
        state.bgColor = allColors[action.payload]
        state.bgWithScheme = allColors[action.payload]
      } else {
        state.bgColor = allColors[action.payload]
        state.bgWithScheme = black
      }
    },
    delColors: state => {
      state.bgColor = undefined
      state.bgWithScheme = undefined
    },
    schemeToggle: (state, action: PayloadAction<boolean>) => {
      const isDark = action.payload
      state.bgWithScheme = isDark ? black : state.bgColor
    }
  }
})

export const { setColor, toggleColor, delColors, schemeToggle } = bgColorSlice.actions

export const bgColorReducer = bgColorSlice.reducer

interface initT {
  bgColor: string | undefined
  bgWithScheme: string | undefined
}
