import React, { PureComponent } from 'react'
import CSSModules from 'react-css-modules'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeSelectToken, clearData, loadData } from '../../actions/App'
import s from './style.pcss'

@connect(
  state => ({
    tokens: state.App.tokens,
    activeToken: state.App.activeToken
  }),
  dispatch => ({
    changeSelectToken: bindActionCreators(changeSelectToken, dispatch),
    clearData: bindActionCreators(clearData, dispatch),
    loadData: bindActionCreators(loadData, dispatch)
  })
)
@CSSModules(s)
export default class TokenTabs extends PureComponent {
  handle = token => {
    // Смена активного таба
    this.props.changeSelectToken(token)

    // Очистка данных от предыдущего токена
    this.props.clearData()

    // Загрузка данных выбранного токена
    this.props.loadData(token)
  }

  render () {
    const items = this.props.tokens.map((item, i) =>
      <button
        key={i}
        styleName='item'
        className={item.name === this.props.activeToken && s.active}
        onClick={() => this.handle(item.name)}
      >
        <span>{item.type}</span>
        <strong>{item.name}</strong>
      </button>
    )

    return (
      <div styleName='block'>
        <p>Выберите токен</p>
        <div styleName='tabs'>
          {items}
        </div>
      </div>
    )
  }
}
