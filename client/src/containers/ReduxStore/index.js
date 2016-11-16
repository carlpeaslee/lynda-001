import React, { Component } from 'react'

import {Provider} from 'react-redux'
import store from '../../store'
import Routing from './Routing'

class ReduxStore extends Component {
  render() {
    return (
      <Provider
        store={store}
      >
        <Routing/>
      </Provider>
    )
  }
}

export default ReduxStore
