import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeActiveCompany } from '../../actions/App'

import { Overlay } from '../BasicElements'

@connect(
  state => ({
    activeCompany: state.App.activeCompany
  }),
  dispatch => ({
    changeActiveCompany: bindActionCreators(changeActiveCompany, dispatch)
  })
)
export default class Select extends PureComponent {
  static propTypes = {
    company: PropTypes.array.isRequired
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    if (!nextProps.activeCompany) {
      return { active: prevState.defaultValue }
    } else if (nextProps.activeCompany !== prevState.active.title) {
      const [find] = nextProps.company.filter(item => nextProps.activeCompany === item.key)
      if (find) return { active: find }
    }
    return null
  }

  state = {
    active: null,
    popup: false,
    defaultValue: {
      name: 'Все авиакомании',
      icon: '/svg/filter.svg'
    }
  }

  showPopup = () => this.setState({ popup: true })

  handle = (key) => {
    this.props.changeActiveCompany(key)
    this.setState({ popup: false })
  }

  render () {
    if (!this.state.active) return null
    const items = this.props.company.map((item, i) =>
      <Value
        key={i}
        onClick={() => this.handle(item.key)}
      >
        <Icon src={item.icon} />
        <Title>{item.name}</Title>
      </Value>
    )
    return (
      <Wrapper>
        <ButtonWrapper>
          <Value onClick={this.showPopup} button={true}>
            <Icon src={this.state.active.icon} />
            <Title dots={true}>{this.state.active.name}</Title>
          </Value>
        </ButtonWrapper>
        {this.state.popup && [
          <Overlay key='0'/>,
          <Popup key='1'>
            {items}
          </Popup>
        ]}
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  height: 38px;
  border-radius: 10px;
  transition: background ease .3s;
  cursor: pointer;
  position: relative;
  user-select: none;
`

const Value = styled.div`
  display: flex;
  height: 38px;
  align-items: center;
  padding: 0 10px;
  border-bottom: 1px solid #eee;
  transition: background ease .3s;

  &:last-child {
    border-bottom: 0;
  }

  &:hover {
    background-color: #1a0dab0a;
  }
`

const Icon = styled.div`
  width: 16px;
  height: 16px;
  background-image: url(${props => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const Title = styled.span`
  margin-left: 7.5px;
  font-size: 16px;
  color: #1a0dab;
`

const Popup = styled.div`
  width: 240px;
  position: absolute;
  z-index: 1000;
  left: 0;
  top: 0;
  background-color: #fff;
  box-shadow: 0px 5px 35px -4px #cacaca;
  border-radius: 5px;
  overflow: hidden;
`

const ButtonWrapper = styled.div`
  display: flex;
`
