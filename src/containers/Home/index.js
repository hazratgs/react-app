/* eslint-disable */
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CSSModules from 'react-css-modules'
import s from './style.pcss'
/* eslint-enable */

@withRouter
@connect(state => ({ state: state }))
@CSSModules(s)
export default class Home extends PureComponent {
  render () {
    return (
      <div>
        <p styleName='foo'>Foo</p>
        <p styleName='bar'>Bar</p>
      </div>
    )
  }
}
