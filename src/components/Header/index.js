import React, { PureComponent } from 'react'
import CSSModules from 'react-css-modules'
import s from './style.pcss'

import TokenTabs from '../TokenTabs'

@CSSModules(s)
export default class Header extends PureComponent {
  render () {
    return (
      <header styleName='header'>
        <h1 styleName='title'>История сделок</h1>
        <TokenTabs/>
      </header>
    )
  }
}
