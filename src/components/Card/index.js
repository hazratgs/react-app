import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'

moment.locale('ru')

export default class Card extends PureComponent {
  static propTypes = {
    item: PropTypes.object.isRequired
  }

  render () {
    const departure = moment(this.props.item.departure)
    const arrival = moment(this.props.item.arrival)
    return (
      <div>
        <Logo src={this.props.company.img}/>
        <Wrapper>
          <Item>
            <Time>{departure.format('HH:mm')}</Time>
            <City>{this.props.item.direction.to}</City>
            <DateFlight>{departure.format('D MMM YYYY, dd')}</DateFlight>
          </Item>
          <FlightTime>
            <FlightTimeIcon src='/svg/start.svg'/>
            <FlightTimeTitle>
              Всего: {moment(departure.diff(arrival)).format('Hч mм')}
            </FlightTimeTitle>
            <FlightTimeProgress/>
            <FlightTimeIcon src='/svg/finish.svg' right={true}/>
          </FlightTime>
          <Item>
            <Time>{arrival.format('HH:mm')}</Time>
            <City>{this.props.item.direction.from}</City>
            <DateFlight>{arrival.format('D MMM YYYY, dd')}</DateFlight>
          </Item>
        </Wrapper>
      </div>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px dotted #eee;
  padding-bottom: 20px;
`

const Logo = styled.img`
  height: 24px;
  padding: 10px 0 5px;
  width: auto;
  display: block;
  margin: 0 auto 5px;
`

const Item = styled.div`

  &:last-child {
    text-align: right;
  }
`

const Time = styled.div`
  font-size: 32px;
  font-weight: 400;
`

const City = styled.div`
  font-size: 12px;
  color: #666;
  font-weight: 500;
  padding: 5px 0 2px;
`

const DateFlight = styled.div`
  font-size: 11px;
  color: #666;
  font-weight: 400;
`

const FlightTime = styled.div`
  flex: 1;
  padding: 7px 15px;
  position: relative;
`

const FlightTimeTitle = styled.div`
  text-align: center;
  padding-bottom: 10px;
  font-size: 12px;
  color: #666;
`

const FlightTimeProgress = styled.div`
  width: 100%;
  height: 1px;
  background-color: #eee;
`

const FlightTimeIcon = styled.div`
  position: absolute;
  left: 15px;
  top: 3px;
  width: 18px;
  height: 18px;
  background-image: url(${props => props.src});
  background-position: center;
  background-repeat: no-repeat;

  ${props => props.right && `
    left: auto;
    right: 15px;
  `}
`
