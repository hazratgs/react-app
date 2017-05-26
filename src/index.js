import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/configureStore'

import App from './containers/App';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <App/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// Hot Module Replacement
// if (module.hot) {
//   module.hot.accept('./containers/App', () => {
//     const NextApp = require('./containers/App').default;
//     ReactDOM.render(
//     <NextApp />,
//       document.getElementById('root')
//     )
//   })
// }
