import {
  HELLO_WORLD
} from '../constants/App'

export function hello(name) {
  return (dispath) => {
    dispath({
      type: HELLO_WORLD,
      payload: name
    })
  }
}