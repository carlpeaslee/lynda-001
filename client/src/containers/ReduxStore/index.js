import React, { Component } from 'react'

import {Provider} from 'react-redux'
import store from '../../store'

class ReduxStore extends Component {
  render() {
    return (
      <Provider
        store={store}
      >
        <h1>TicTacTuring</h1>
      </Provider>
    )
  }
}

export default ReduxStore
