# Chapter 10 Planning

Phew, we're done with most of the setup on the frontend side of things.

I'm going to quickly get rid of some of the stuff we put on the screen for testing so our project can be a nice blank slate...


```javascript
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
```

So now we can start making our app, right? Dive right in?

Ooh, sorry. Actually before we begin writing our code, it's really really really important to plan things out first. So let's go to the drawing board.

Here is a wireframe of the site I'm imagining.
