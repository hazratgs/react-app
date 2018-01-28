// eslint-disable-line
import React, { PureComponent } from 'react'
import { connect } from 'react-redux' // eslint-disable-line
import { withRouter } from 'react-router-dom' // eslint-disable-line
import s from './style.pcss'

@connect(state => ({ state: state }))
@withRouter
export default class Home extends PureComponent {
  render () {
    return (
      <div className={s.home}>
        <p className={s.foo}>Foo</p>
        <p className={s.bar}>Bar</p>
      </div>
    )
  }
}
