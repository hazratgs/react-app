import React, { PureComponent } from 'react'
import { withRouter, NavLink } from 'react-router-dom' // eslint-disable-line

import s from './style.pcss'
import Icon from '../../public/svg/icon.svg'

@withRouter
export default class Header extends PureComponent {
  render () {
    return (
      <div className={s.header}>
        <Icon width='100px'/>
        <h2>react-app-constructor</h2>
        <ul className={s.menu}>
          <li>
            <NavLink
              to='/'
              exact
              activeStyle={{
                fontWeight: 'bold',
                color: 'red'
              }}
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contact'
              activeStyle={{
                fontWeight: 'bold',
                color: 'red'
              }}
            >
              Контакты
            </NavLink>
          </li>
        </ul>
      </div>
    )
  }
}
