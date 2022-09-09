import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { goBack } from '../constants'
import { allPartsT, sectionT } from '../types/LessonTypes'

const initialState: initT = {
  lessonId: 0,
  lessonData: [],
  part: 'en',
  sectionIndex: 0,
  currentLesson: undefined,
  history: [],
  lastIndex: 0,
  cardName: ''
}

export const sectionSlice = createSlice({
  name: 'section',
  initialState,
  reducers: {
    incrementSection: state => {
      let newIndex = state.sectionIndex + 1
      while (
        state.lessonData[newIndex] &&
        (state.lessonData[newIndex].type === 'emojiLearn' ||
          state.lessonData[newIndex].type === 'learn')
      ) {
        newIndex = newIndex + 1
      }
      if (newIndex > state.lastIndex) {
        // win
        goBack()
      }
      if (state.lessonData && state.lessonData.length - 1 >= newIndex) {
        state.history.push(state.sectionIndex)
        state.sectionIndex = newIndex
        state.currentLesson = state.lessonData[newIndex]
      }
    },
    setSection: (state, action: PayloadAction<number>) => {
      const newIndex = action.payload
      if (state.lessonData && newIndex < state.lessonData.length && newIndex >= 0) {
        state.history.push(state.sectionIndex)
        state.sectionIndex = newIndex
        state.currentLesson = state.lessonData[newIndex]
      }
    },
    initLessonData: (
      state,
      action: PayloadAction<{
        sections: sectionT[]
        cardName: string
        part: allPartsT
        id: number
      }>
    ) => {
      const { sections, part, cardName, id } = action.payload
      state.sectionIndex = 0
      state.lessonData = [
        ...sections,
        {
          type: 'win'
        }
      ]
      state.lessonId = id
      state.currentLesson = sections[0]
      state.history = []
      state.part = part
      state.lastIndex = state.lessonData.length - 1
      state.cardName = cardName
    },
    goPrevious: state => {
      if (state.history.length > 0 && state.lessonData) {
        const last = state.history[state.history.length - 1]
        state.sectionIndex = last
        state.history.pop()
        state.currentLesson = state.lessonData[last]
      } else {
        goBack()
        state.sectionIndex = 0
        state.lessonData = []
        state.currentLesson = undefined
        state.history = []
        state.lastIndex = 0
      }
    }
  }
})

export const { incrementSection, setSection, initLessonData, goPrevious } =
  sectionSlice.actions

export const sectionReducer = sectionSlice.reducer

interface initT {
  lessonId: number
  lessonData: sectionT[]
  currentLesson: sectionT | undefined
  sectionIndex: number
  history: number[]
  lastIndex: number
  cardName: string
  part: allPartsT
}
