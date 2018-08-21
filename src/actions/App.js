import {
  GET_FLIGHTS,
  SUCCESS_LOAD_FLIGHTS,
  ERROR_LOAD_FLIGHTS,
  CHANGE_ACTIVE_COMPANY
} from '../constants/App'

export function getFlights () {
  return dispatch => {
    dispatch({
      type: GET_FLIGHTS,
      payload: true
    })

    // Намеренно откладываем загрузку
    setTimeout(() => {
      window.fetch('/data.json')
        .then(response => response.json())
        .then(response => {
          dispatch({
            type: SUCCESS_LOAD_FLIGHTS,
            payload: response.flights
          })
        })
        .catch(err => {
          dispatch({
            type: ERROR_LOAD_FLIGHTS,
            payload: err
          })
        })
    }, 400)
  }
}

export function changeActiveCompany (name) {
  return {
    type: CHANGE_ACTIVE_COMPANY,
    payload: name
  }
}
