import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Helmet from 'react-helmet'

import { getFlights } from '../../actions/App'

import { AppWrapper, ItemsWrapper } from '../../components/BasicElements'
import Select from '../../components/Select'
import Card from '../../components/Card'
import Loader from '../../components/Loader'

@hot(module)
@withRouter
@connect(
  state => ({
    flights: state.App.flights,
    company: state.App.company,
    activeCompany: state.App.activeCompany
  }),
  dispatch => ({
    getFlights: bindActionCreators(getFlights, dispatch)
  })
)
export default class App extends PureComponent {
  componentDidMount () {
    this.props.getFlights()
  }

  findCompany = (name) => {
    const [find] = this.props.company.filter(item => item.key === name)
    return find
  }

  render () {
    const items = this.props.flights
      .filter(item => {
        if (!this.props.activeCompany) {
          return true
        }
        return item.carrier === this.props.activeCompany
      })
      .map(item =>
        <Card
          key={item.id}
          item={item}
          company={this.findCompany(item.carrier)}
        />
      )

    return (
      <AppWrapper>
        <Helmet
          title='My first ssr app'
        />
        <div>
          <Select
            company={this.props.company}
          />
          <ItemsWrapper>
            {this.props.flights.length
              ? items
              : <Loader />
            }
          </ItemsWrapper>
        </div>
      </AppWrapper>
    )
  }
}
