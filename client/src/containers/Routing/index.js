import React, { Component } from 'react'
import {Router, browserHistory} from 'react-router'
import routes from '../../routes'

class Routing extends Component {
  render() {
    return (
      <Router
        routes={routes}
        history={browserHistory}
      />
    )
  }
}

export default Routing
