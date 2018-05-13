import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { asideToogle } from '../../actions/App'
import { NavLink, withRouter } from 'react-router-dom'
import CSSModules from 'react-css-modules'
import s from './style.pcss'

@connect(
  state => ({ theme: state.App.theme, aside: state.App.aside }),
  dispatch => ({ asideToogle: bindActionCreators(asideToogle, dispatch) })
)
@withRouter
@CSSModules(s)
export default class Header extends PureComponent {
  aside = () => this.props.asideToogle(!this.props.aside)

  render () {
    return (
      <header styleName='header' className={s[this.props.theme]}>
        <div styleName='wrapper'>
          <div styleName='logo'>
            <NavLink to='/'/>
          </div>
          <div styleName='nav'>
            <div styleName='nav-wrapper'>
              <NavLink to='/' activeClassName={s.active}>о себе</NavLink>
              <NavLink to='/work' activeClassName={s.active}>проекты</NavLink>
              <NavLink to='/contact' activeClassName={s.active}>контакты</NavLink>
            </div>
            <div styleName='burger' onClick={this.aside}>
              <div>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
