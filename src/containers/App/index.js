import React, { PureComponent } from 'react'
import { withRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions/App'

import s from './style.css'
import 'normalize.css'

import Header from '../Header'
import Home from '../Home'
import Contact from '../Contact'

class App extends PureComponent {
  render () {
    return (
      <div className={s.app}>
        <Header/>
        <div className={s.content}>
          <Route path='/' exact component={Home}/>
          <Route path='/contact' component={Contact}/>
        </div>
      </div>
    )
  }
}

export default withRouter(connect(
  state => ({
    state: state.App
  }),
  dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
  })
)(App))
