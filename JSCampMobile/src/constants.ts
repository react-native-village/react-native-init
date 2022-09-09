import { createNavigationContainerRef } from '@react-navigation/native'
import { Dimensions, Platform } from 'react-native'
import Sound from 'react-native-sound'
import { initLessonData, toggleColor } from './slices'
import { store } from './store'
import { RootStackParamList } from './types'
import { LessonData, sectionT } from './types/LessonTypes'
import { allPartsT } from './types/LessonTypes'

// NAVIGATION
export const navRef = createNavigationContainerRef<RootStackParamList>()

export const goToUI = () => {
  if (navRef.isReady()) {
    navRef.navigate('UI')
  }
}

export const goBack = () => {
  if (navRef.isReady()) {
    navRef.goBack()
  }
}

// Dimensions
export const win = Dimensions.get('window')
export const W = win.width
export const H = win.height

// COLORS
export const primary = '#50E3C2'
export const secondary = '#ff06f4'
export const gray = '#949494'
export const white = '#ffffff'
export const black = '#17191A'
export const darkGray = '#3B3B3B'
export const lightGray = '#BFBFBF'
export const brightTurquoise = '#1EE4EC'
export const green = '#2ECC71'
export const red = 'rgb(255, 69, 58)'

export const en_gradient = '#FED2F1'
export const en_color = '#FDBEEA'
export const js_gradient = '#F6E367'
export const js_color = '#F3DE50'
export const rn_gradient = '#D3FFEF'
export const rn_color = '#BEFCE5'
export const ts_gradient = '#178FE0'
export const ts_color = '#007ACD'
export const aws_gradient = '#333435'
export const aws_color = '#242526'

export const getColor = (id: number | allPartsT) => {
  if (typeof id === 'number') {
    return [en_color, js_color, rn_color, ts_color, aws_color][id]
  } else if (typeof id === 'string') {
    return { en: en_color, js: js_color, rn: rn_color, ts: ts_color, aws: aws_color }[id]
  }
}
// THEMES
export const lightTheme = {
  dark: false,
  colors: {
    primary: secondary,
    background: white,
    card: '#F6F8FA',
    text: black,
    border: darkGray,
    notification: 'rgb(255, 69, 58)'
  }
}
export const darkTheme = {
  dark: true,
  colors: {
    primary: primary,
    background: black,
    card: '#282A36',
    text: white,
    border: lightGray,
    notification: 'rgb(255, 69, 58)'
  }
}

// FONTS
export const KLMN = Platform.OS === 'ios' ? 'KLMN-Flash-Pix' : 'KLMN_Flash_Pix'
export const Dolbak = Platform.OS === 'ios' ? 'The Dolbak' : 'TheDolbak-Brush'
export const Etna = Platform.OS === 'ios' ? 'Etna' : 'etna-free-font'
export const Narrow = '3270Narrow'

// SOUNDS

export const errorSound = new Sound('error.wav', Sound.MAIN_BUNDLE)
export const winSound = new Sound('win.mp3', Sound.MAIN_BUNDLE)
export const clapSound = new Sound('clap.mp3', Sound.MAIN_BUNDLE)

// FETCH

export const fetchJson = async (url: string) => {
  try {
    const res = await (await fetch(url)).json()
    return res
  } catch (error) {
    handleError(error)
    return []
  }
}

export const fetchText = async (url: string) => {
  try {
    const fetchRes = await fetch(url)
    if (fetchRes.ok) {
      const res = await fetchRes.text()
      return res
    } else {
      return ''
    }
  } catch (error) {
    handleError(error)
    return ''
  }
}

// FUNCTIONS

export const handleError = (error: any) => {
  console.log('MY error: ', error)
}

export function shuffle(array: any[]) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}

export const randomProperty = (obj: any) => {
  var keys = Object.keys(obj)
  return obj[keys[(keys.length * Math.random()) << 0]]
}

export const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min
}

export function getRandomItem(arr: any[]) {
  return arr[Math.floor(Math.random() * arr.length)]
}

export const handlePressCard = (
  color: allPartsT,
  sections: sectionT[],
  cardName: string,
  id: number
) => {
  store.dispatch(toggleColor(color))
  store.dispatch(initLessonData({ sections, cardName, part: color, id }))
  if (navRef.isReady()) {
    navRef.navigate('LESSON_SCREEN')
  }
}
