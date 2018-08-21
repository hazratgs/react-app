import {
  GET_FLIGHTS,
  SUCCESS_LOAD_FLIGHTS,
  ERROR_LOAD_FLIGHTS,
  CHANGE_ACTIVE_COMPANY
} from '../constants/App'

const initialState = {
  activeCompany: null,
  startLoadFlights: false,
  errorLoadFlights: null,
  flights: [],
  company: [
    {
      key: null,
      name: 'Все авиакомании',
      icon: '/svg/filter.svg'
    },
    {
      key: 'S7',
      name: 'S7 Airlines',
      link: 'https://www.s7.ru/ru/',
      icon: 'https://www.s7.ru/favicons/favicon-16x16.png',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/S7_new_logo.svg/1280px-S7_new_logo.svg.png'
    },
    {
      key: 'Aeroflot',
      name: 'Аэрофлот',
      link: 'https://www.aeroflot.ru/de-ru',
      icon: 'https://www.aeroflot.ru/static/images/favicon.ico',
      img: 'https://upload.wikimedia.org/wikipedia/ru/thumb/a/a1/Aeroflot_logo.svg/2500px-Aeroflot_logo.svg.png'
    },
    {
      key: 'KLM',
      name: 'KLM Royal Duthch Airlines',
      link: 'https://www.klm.com/',
      icon: 'https://www.klm.com/favicon.ico',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/KLM_logo.svg/800px-KLM_logo.svg.png'
    }
  ]
}

export default function appState (state = initialState, action) {
  switch (action.type) {
    case GET_FLIGHTS:
      return { ...state, startLoadFlights: action.payload }

    case SUCCESS_LOAD_FLIGHTS:
      return { ...state, flights: action.payload }

    case ERROR_LOAD_FLIGHTS:
      return { ...state, errorLoadFlights: action.payload }

    case CHANGE_ACTIVE_COMPANY:
      return { ...state, activeCompany: action.payload }

    default:
      return state
  }
}
