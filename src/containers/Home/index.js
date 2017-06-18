import React, { PureComponent } from 'react'
import s from './style.pcss'

export default class Home extends PureComponent {
  render () {
    return (
      <div className={s.home}>
        <p>Главная страница</p>
      </div>
    )
  }
}
