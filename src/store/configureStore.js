import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import { createBrowserHistory, createMemoryHistory } from 'history'
import rootReducer from '../reducers'

export const isServer = !(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)

export default (url = '/') => {
  const history = isServer
    ? createMemoryHistory({
      initialEntries: [url]
    })
    : createBrowserHistory()

  const enhancers = []

  if (process.env.NODE_ENV === 'development' && !isServer) {
    const devToolsExtension = window.devToolsExtension

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

  const middleware = [thunk, routerMiddleware(history)]
  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  )

  const initialState = !isServer ? window.__PRELOADED_STATE__ : {}

  if (!isServer) {
    delete window.__PRELOADED_STATE__
  }

  // Create the store
  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composedEnhancers
  )

  return {
    store,
    history
  }
}
