import { CHANGE_TEXT } from './types'

export const changeText = (text) => {
  return {
    type: CHANGE_TEXT,
    text
  }
}