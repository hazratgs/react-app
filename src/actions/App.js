import io from 'socket.io-client'

import {
  GET_LOAD_DATA,
  SUCCESS_LOAD_DATA,
  CHANGE_SELECT_TOKEN,
  CLEAR_DATA
} from '../constants/App'

const socket = io('https://socket.etherdelta.com', { transports: ['websocket'] })
socket.on('connect', () => console.log('connect to etherdelta'))
socket.on('disconnect', console.log('error connect'))

export function loadData (token) {
  return dispatch => {
    dispatch({
      type: GET_LOAD_DATA,
      payload: true
    })

    try {
      // Устанавливаем токен
      socket.emit('getMarket', { token: token })

      // Первоначальная загрузка транзакций
      socket.once('market', (market) => {
        console.log('market', market)
        if (market.trades && market.trades.length) {
          dispatch({
            type: SUCCESS_LOAD_DATA,
            payload: market.trades
          })

          // Первоначальная загрузка завершена
          dispatch({
            type: GET_LOAD_DATA,
            payload: false
          })
        }
      })

      // Дополняем новыми транзакциями
      socket.on('trades', (trades) => {
        console.log('trades', trades)
        dispatch({
          type: SUCCESS_LOAD_DATA,
          payload: trades
        })
      })
    } catch (e) {
      console.log('Ошибка загрузки данных...')
    }
  }
}

export function changeSelectToken (token) {
  return {
    type: CHANGE_SELECT_TOKEN,
    payload: token
  }
}

export function clearData () {
  return {
    type: CLEAR_DATA,
    payload: []
  }
}
