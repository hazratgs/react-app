import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import CSSModules from 'react-css-modules'
import s from './style.pcss'

import MenuIcon from './menu.svg'

@connect(state => ({ theme: state.App.theme }))
@withRouter
@CSSModules(s)
export default class Header extends PureComponent {
  render () {
    return (
      <header styleName='header' className={s[this.props.theme]}>
        <div styleName='wrapper'>
          <div styleName='logo'>
            <NavLink to='/'/>
          </div>
          <div styleName='nav'>
            <div styleName='nav-wrapper'>
              <NavLink to='/'>о себе</NavLink>
              <NavLink to='/'>работы</NavLink>
              <NavLink to='/'>контакты</NavLink>
            </div>
            <MenuIcon/>
          </div>
        </div>
      </header>
    )
  }
}
