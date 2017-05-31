import {
  HELLO_WORLD
} from '../constants/App'

const initialState = {
  name: 'name'
}

export default function headerState(state = initialState, action) {
  switch (action.type){
    case HELLO_WORLD:
      return {...state, name: action.payload}

    default:
      return state
  }
}