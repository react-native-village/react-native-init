import { SEARCH_CHANGE } from '../types'

export const searchChanged = (text) => {
  return {
    type: SEARCH_CHANGE,
    payload: text
  }
} 
