import React, { Component } from 'react'
import {Router, browserHistory} from 'react-router'
import routes from '../../routes'
import ReduxStore from '../ReduxStore'

class Routing extends Component {
  render() {
    return (
      <Router
        routes={routes}
        history={browserHistory}
      >
        <ReduxStore/>
      </Router>
    );
  }
}

export default Routing
