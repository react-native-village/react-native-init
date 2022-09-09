import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { allPartsT } from '../types/LessonTypes'

const initialState: initT = {
  passed: { en: [], js: [], rn: [], ts: [], aws: [] },
  courseLength: { en: 0, js: 0, rn: 0, ts: 0, aws: 0 },
  exams: { en: false, js: false, rn: false, ts: false, aws: false }
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    saveResult: (state, action: PayloadAction<{ part: allPartsT; id: number }>) => {
      const { part, id } = action.payload
      if (!state.passed[part].includes(id)) {
        state.passed[part].push(id)
      }
    },
    examComplete: (state, action: PayloadAction<allPartsT>) => {
      const part = action.payload
      state.exams[part] = true
    },
    changeCourseLength: (
      state,
      action: PayloadAction<{ part: allPartsT; length: number }>
    ) => {
      const { part, length } = action.payload
      state.courseLength[part] = length
    }
  }
})

export const { saveResult, examComplete, changeCourseLength } = profileSlice.actions

export const profileReducer = profileSlice.reducer

interface initT {
  passed: {
    en: number[]
    js: number[]
    rn: number[]
    ts: number[]
    aws: number[]
  }
  exams: {
    en: boolean
    js: boolean
    rn: boolean
    ts: boolean
    aws: boolean
  }
  courseLength: numeric
}

type numeric = {
  en: number
  js: number
  rn: number
  ts: number
  aws: number
}
