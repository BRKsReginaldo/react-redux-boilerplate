import { CHANGE_TEXT } from '../actions/types'

const initialState = {
  'testMessage' : 'Redux state are working fine.'
}

export default function(state = initialState, action) {
  const { text } = action

  switch (action.type) {
    case CHANGE_TEXT:
      return {
        ...state,
        'testMessage': text.value
      }
    default:
      return state
  }
}