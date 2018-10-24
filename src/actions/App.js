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
    setTimeout(async () => {
      try {
        const response = await window.fetch('/data.json')
        const body = await response.json()
        dispatch({
          type: SUCCESS_LOAD_FLIGHTS,
          payload: body.flights
        })
      } catch (err) {
        dispatch({
          type: ERROR_LOAD_FLIGHTS,
          payload: err
        })
      }
    }, 400)
  }
}

export function changeActiveCompany (name) {
  return {
    type: CHANGE_ACTIVE_COMPANY,
    payload: name
  }
}
