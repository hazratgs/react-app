import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CSSModules from 'react-css-modules'
import s from './style.pcss'

@connect(state => ({ theme: state.App.theme }))
@withRouter
@CSSModules(s)
export default class About extends PureComponent {
  state = {
    loader: true
  }

  componentDidMount () {
    setTimeout(() => this.setState({ loader: false }), 60)
  }

  render () {
    return (
      <div styleName='about' className={s[this.props.theme]}>
        <div styleName='wrapper' className={this.state.loader && s.loader}>
          <h1>О себе</h1>
          <p>Мы делаем сайты, приложения и фирменные стили. Готовые продукты не бросаем, а предлагаем поддержку: вдруг вам понадобится сделать презентацию или добавить на сайт раздел.</p>
          <p>Наши проекты получают награды, их копируют и просят «сделать такие же». Все потому что мы вплотную работаем с клиентом: изучаем его бизнес, конкурентов, проводим встречи, постоянно находимся на связи. Со многими продолжаем дружить после окончания проекта и ходим друг к другу в гости.</p>
          <p>С нами легко. Мы предлагаем только те решения, в пользе которых уверены.</p>
          <div styleName='number'>
            <div styleName='item'>
              <strong>30+</strong>
              <span>проектов</span>
            </div>
            <div styleName='item'>
              <strong>7</strong>
              <span>новых клиентов</span>
            </div>
            <div styleName='item'>
              <strong>×2</strong>
              <span>рост оборота</span>
            </div>
            <div styleName='item'>
              <strong>1</strong>
              <span>новый сотрудник</span>
            </div>
            <div styleName='item'>
              <strong>640</strong>
              <span>чашек кофе</span>
            </div>
            <div styleName='item'>
              <strong>39</strong>
              <span>созвонов</span>
            </div>
            <div styleName='item'>
              <strong>47</strong>
              <span>встреч</span>
            </div>
            <div styleName='item'>
              <strong>3</strong>
              <span>презентаций</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
