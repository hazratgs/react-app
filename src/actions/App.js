import {
  ASIDE_TOGGLE
} from '../constants/App'

export function asideToogle (value) {
  return {
    type: ASIDE_TOGGLE,
    payload: value
  }
}
