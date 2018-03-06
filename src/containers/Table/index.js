import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadData } from '../../actions/App'
import CSSModules from 'react-css-modules'
import s from './style.pcss'
import LoaderIcon from '../../public/svg/loader.svg'
import * as moment from 'moment'

moment.locale('ru')

@connect(
  state => ({
    data: state.App.data,
    startLoadData: state.App.startLoadData,
    errorLoadData: state.App.errorLoadData,
    activeToken: state.App.activeToken,
    tokens: state.App.tokens
  }),
  dispatch => ({
    loadData: bindActionCreators(loadData, dispatch)
  })
)
@CSSModules(s)
export default class Table extends PureComponent {
  state = {
    start: false,
    maxElements: 100
  }

  componentDidMount () {
    // Подгружаем транзакции для токена по умолчанию
    const [token] = this.props.tokens.filter(item => item.name === this.props.activeToken)
    this.props.loadData(token)
  }

  render () {
    // Сортируем, новые наверх
    const data = [...this.props.data].reverse()
    const items = data.filter((item, i) => i < this.state.maxElements)
      .map((item, i) =>
        <div key={i} styleName='row'>
          <div styleName='column' className={s.min}>
            <span styleName='side' className={s[item.side]}>{item.side}</span>
          </div>
          <div styleName='column'>{item.amount} {this.props.activeToken}</div>
          <div styleName='column'>{item.price} btc</div>
          <div styleName='column' className={s.small}>{moment(item.date).format('LLL')}</div>
        </div>
      )

    // Сообщение о начале загрузки
    const startLoadData = (
      <div styleName='loader'>
        <LoaderIcon/>
        <strong>Ожидаем ответа...</strong>
      </div>
    )

    return (
      <div styleName='table'>
        <div styleName='head'>
          <div styleName='column' className={s.min}>Тип</div>
          <div styleName='column'>Объем</div>
          <div styleName='column'>Цена</div>
          <div styleName='column' className={s.small}>Дата</div>
        </div>
        <div>
          {items}
          {this.props.startLoadData && !items.length && startLoadData}
        </div>
      </div>
    )
  }
}
