import React, { PureComponent } from 'react'
import { withRouter, NavLink, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions/App'

import Contact from '../Contact'

import s from './style.css'

class App extends PureComponent {
  render() {
    return (
      <div className={s.app}>
        <h1>Hello, world!</h1>
        <NavLink to='/' exact>Главная</NavLink>
        <br/>
        <NavLink to='/contact' exact>Контакты</NavLink>

        <Route path='/contact' component={Contact}/>
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