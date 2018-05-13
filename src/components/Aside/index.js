import React, { PureComponent } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { asideToogle } from '../../actions/App'
import CSSModules from 'react-css-modules'
import s from './style.pcss'

import VkIcon from './vk.svg'
import InstagramIcon from './instagram.svg'

@connect(
  state => ({ aside: state.App.aside }),
  dispatch => ({ asideToogle: bindActionCreators(asideToogle, dispatch) })
)
@withRouter
@CSSModules(s)
export default class Aside extends PureComponent {
  state = {
    visible: false,
    social: false,
    contact: false
  }

  componentWillReceiveProps () {
    console.log('render')
    setTimeout(() => this.setState({ visible: this.props.aside }), 200)
    setTimeout(() => this.setState({ social: this.props.asidee }), 270)
    setTimeout(() => this.setState({ contact: this.props.aside }), 340)
  }

  hide = () => this.props.asideToogle(false)

  clickHide = e => e.target.classList.contains(s.aside) && this.props.asideToogle(false)

  render () {
    return (
      <div
        styleName='aside'
        className={this.props.aside && s.active}
        onClick={this.clickHide}
      >
        <div styleName='wrapper'>
          <div styleName='scroll'>
            <div styleName='nav' className={this.state.visible && s.active}>
              <div styleName='item'>
                <NavLink
                  to='/company'
                  activeClassName={s.active}
                  onClick={this.hide}
                >
                  о себе
                </NavLink>
              </div>
              <div styleName='item'>
                <NavLink
                  to='/company'
                  activeClassName={s.active}
                  onClick={this.hide}
                >
                  проекты
                </NavLink>
              </div>
              <div styleName='item'>
                <NavLink
                  to='/contact'
                  activeClassName={s.active}
                  onClick={this.hide}
                >
                  контакты
                </NavLink>
              </div>
            </div>
            <div styleName='social' className={this.state.social && s.active}>
              <a href='/'>
                <InstagramIcon />
              </a>
              <a href='/'>
                <VkIcon />
              </a>
            </div>
            <div styleName='contact' className={this.state.contact && s.active}>
              <div styleName='phone'>
                <a href='mailto:hello@febox.ru'>
                  <span>hello@febox.ru</span>
                </a>
                <a href='tel:+79285396966'>+7 (883) 211-80-80</a>
              </div>
              <div styleName='address'>Дербент, Гагарина, 15 А, 2 этаж</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
