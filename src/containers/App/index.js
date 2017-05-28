import React, { PureComponent } from 'react'
import { withRouter, NavLink, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions/App'

import s from './style.css'
import 'normalize.css'

import Header from '../Header'
import Slider from '../../components/Slider'

class App extends PureComponent {
  render() {
    return (
      <div className={s.app}>
        <Header/>
        <Slider/>

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