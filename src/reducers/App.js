import {
  ASIDE_TOGGLE
} from '../constants/App'

const initialState = {
  theme: 'black',
  aside: false
}

export default function appState (state = initialState, action) {
  switch (action.type) {
    case ASIDE_TOGGLE:
      return { ...state, aside: action.payload }

    default:
      return state
  }
}
