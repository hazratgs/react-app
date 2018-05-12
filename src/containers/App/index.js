import React, { PureComponent } from 'react'
import { withRouter, Route } from 'react-router-dom'
import s from './style.pcss'

import Header from '../../components/Header'
import About from '../About'

@withRouter
export default class App extends PureComponent {
  render () {
    return (
      <div className={s.app}>
        <div className={s.content}>
          <Header theme={this.props.theme}/>
          <div>
            <Route exact path='/' component={About}/>
          </div>
        </div>
      </div>
    )
  }
}
