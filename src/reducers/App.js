import {
  GET_LOAD_DATA,
  SUCCESS_LOAD_DATA,
  ERROR_LOAD_DATA,
  CHANGE_SELECT_TOKEN,
  CLEAR_DATA
} from '../constants/App'

const initialState = {
  data: [],
  startLoadData: false,
  errorLoadData: false,
  tokens: [
    {
      name: 'EOS',
      type: 'Blockchain',
      token: '0x86Fa049857E0209aa7D9e616F7eb3b3B78ECfdb0'
    },
    {
      name: 'TRX',
      type: 'Blockchain',
      token: '0xf230b790E05390FC8295F4d3F60332c93BEd42e2'
    },
    {
      name: 'VEN',
      type: 'Blockchain',
      token: '0xD850942eF8811f2A866692A623011bDE52a462C1'
    }
  ],
  activeToken: 'EOS'
}

export default function appState (state = initialState, action) {
  switch (action.type) {
    case GET_LOAD_DATA:
      return { ...state, startLoadData: action.payload }

    case SUCCESS_LOAD_DATA:
      return { ...state, data: [ ...state.data, ...action.payload ] }

    case ERROR_LOAD_DATA:
      return { ...state, errorLoadData: action.payload }

    case CHANGE_SELECT_TOKEN:
      return { ...state, activeToken: action.payload }

    case CLEAR_DATA:
      return { ...state, data: action.payload }

    default:
      return state
  }
}
