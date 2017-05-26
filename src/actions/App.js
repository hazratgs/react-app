import {
  STYLE_APP,
  COLOR_HEADER,
  SHOW_ASIDE,
  HIDE_ASIDE
} from '../constants/App'

export function changeStyleApp(color) {
  return {
    type: STYLE_APP,
    payload: color
  }
}

export function changeColorHeader(color) {
  return (dispath) => {
    dispath({
      type: COLOR_HEADER,
      payload: color
    })
  }
}

export function showAside() {
  return {
    type: SHOW_ASIDE,
    payload: 'active'
  }
}

export function hideAside() {
  return {
    type: HIDE_ASIDE,
    payload: 'hidden'
  }
}