import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CSSModules from 'react-css-modules'
import s from './style.pcss'

import JSLogo from './javascript.svg'
import MongoDB from './mongodb.svg'
import Webpack from './webpack.svg'
import NodeLogo from './node.svg'
import MochaLogo from './mocha.svg'

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

  getYear = start => new Date().getFullYear() - start

  render () {
    return (
      <div styleName='about' className={s[this.props.theme]}>
        <div styleName='wrapper' className={this.state.loader && s.loader}>
          <h1>О себе</h1>
          <p>
            Разработкой занимаюсь уже более {this.getYear(2009)} лет,
            имею большой опыт создания разной сложности проектов,
            от интернет-магазинов и служб доставки еды до автоматизации сложных решений для бизнема.
          </p>
          <p>
            Мне нравится принимать участие во всех этапах разработки приложений,
            начиная от серверной логики и ее реализации с помощью различных технологий и фреймворков,
            и заканчивая клиентским кодом приложения.
          </p>
          <p>Текущий мой стек состоит из:</p>
          <div styleName='number'>
            <div styleName='item'>
              <JSLogo/>
              <span>основной язык</span>
            </div>
            <div styleName='item'>
              <MongoDB/>
              <span>база данных</span>
            </div>
            <div styleName='item'>
              <Webpack/>
              <span>сборщик проектов</span>
            </div>
            <div styleName='item'>
              <span>билбиотека рендера</span>
            </div>
            <div styleName='item'>
              <NodeLogo/>
              <span>серверный язык</span>
            </div>
            <div styleName='item'>
              <MochaLogo/>
              <span>тестирование</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
