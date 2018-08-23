import React from 'react'
import { render, hydrate } from 'react-dom'
import Loadable from 'react-loadable'
import { Frontload } from 'react-frontload'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import createStore from './store/configureStore'

import 'whatwg-fetch'
import 'normalize.css'

import App from './containers/App'

const { store, history } = createStore()

const Application = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Frontload noServerRender>
        <App />
      </Frontload>
    </ConnectedRouter>
  </Provider>
)

const root = document.querySelector('#root')

if (process.env.NODE_ENV === 'production') {
  Loadable.preloadReady().then(() => {
    hydrate(Application, root)
  })
} else {
  render(Application, root)

  // Hot Module Replacement
  if (module.hot) {
    module.hot.accept('./containers/App', () => {
      render(Application, root)
    })
  }
}
