import React, {Component} from 'react'
import {RaisedButton} from 'material-ui'

class Template extends Component {
  render() {
    return (
      <div>
        <header
        >
          <h1>TicTacTuring</h1>
        </header>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Template
