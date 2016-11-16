# Chapter 8 styling

We're almost ready to get to the fun stuff!

But as you may have noticed, we've still got one problem: our site looks pretty bad.

In this chapter, I'm going to show you how to connect the ui library `material-ui`. There are lots of great ui libraries out there -- including the twitter inspired `react-bootstrap` but in this course we're going to hook up `material-ui`.

I personally would prefer to not use a ui library when possible –– but they can be useful when you want to quickly develop prototypes that show off functionality without too much tricky front end work.

I'm also going to show you how to create your own style and theme classes so that you can speed up your implementation of javascript-as-css styling.

Let's start by installing `material-ui` and `react-tap-event-plugin` –– a dependency of `material-ui` that will allow our app to better understand tap events from tablets and mobile devices.

```bash
# ./client
npm install material-ui react-tap-event-plugin --save
```

Next we need to create a container that will connect Material-ui's functionality and themes to our app.

For that we'll need a new container:

```bash
# ./client
mkdir src/containers/MaterialUi
touch src/containers/MaterialUi/index.js
```

Let's write out this file:

```bash
### ./client/src/containers/MaterialUi/index.js ###
```
```javascript
import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Routing from '../Routing'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()


class MaterialUi extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Routing/>
      </MuiThemeProvider>
    );
  }
}

export default MaterialUi
```

As you can see, I've decided to nest routing within this MaterialUi. This just means I now  need to refactor some of the other containers.


```bash
### ./client/src/containers/ReduxStore/index.js ###
```
```javascript
import React, { Component } from 'react'

import {Provider} from 'react-redux'
import store from '../../store'
//import Routing from '../Routing'  <-- take this out
import MaterialUi from '../MaterialUi' // put this in

class ReduxStore extends Component {
  render() {
    return (
      <Provider
        store={store}
      >
        <MaterialUi/> {/*here too!*/}
      </Provider>
    )
  }
}

export default ReduxStore

```

Let's try implementing a material-ui component to make sure things work!

```bash
### ./client/src/containers/Template/index.js ###
```
```javascript
import React, {Component} from 'react'
import {RaisedButton} from 'material-ui'

class Template extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>TicTacTuring</h1>
          <RaisedButton primary={true} />
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

Ok, now let's see what happens when we check it out. 

```bash
### ./client ###
npm start
```
