import React, {Component} from 'react'
import {RaisedButton} from 'material-ui'
import S from '../../styles/S'

const base = {
  backgroundColor: 'red',
}

const mobile = {
  backgroundColor: 'blue'
}

const s = new S({
  base: base,
  mobile: mobile
})

class Template extends Component {
  render() {
    return (
      <div>
        <header
          style={{...s.all}}
        >
          <h1>TicTacTuring</h1>
          <RaisedButton
            primary={true}
            label={'Hello!'}
          />
        </header>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Template
