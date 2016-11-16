# Chapter 6: Routing

Our next step will be to implement routing using react-router.

First we'll install react-router:

```bash
# ./client
npm install react-router --save
```

...and start by creating our routes file...

```bash
# ./client
touch src/routes/index.js
```

If you're not familiar with `react-router`, what we're doing here is telling our application about how it should respond to different routes.

`<Route>`'s `path=` prop tells our router how to react to a given string in the url.

And then the `component=` prop tells the router what components to render based on the given path.

`react-router` also allows us to nest our components. we'll be nesting all of our main routes beneath a root (`"/"`) route that will be connected to a soon to be created `Template` component. This way, our `Template` container will always render and our other views will just render based on the route.

*./client/src/routes/_index.js_*
```javascript
import React from 'react'
import {Route, IndexRoute} from 'react-router'

//this doesn't exist yet but it will soon!
import Template from '../containers/Template'

//and neither do these but we'll get to that
import home from '../views/home'
import profile from '../views/profile'

const createRoutes = () => {
  return (
    <Route path="/" component={Template}>
      <IndexRoute component={home} />
      <Route
        path="/profile"
        component={profile}
      />
    </Route>
  )
}

const routes = createRoutes()

export default routes

```

Let's go ahead and create the files we referenced just now in our `../routes/index.js` file.

```bash
# ./client
mkdir src/views/home src/views/profile src/containers/Template
touch src/views/home/index.js src/views/profile/index.js src/containers/Template/index.js
```

*./client/src/views/home/_index.js_*
```javascript
import React from 'react'

const home = () => {
  return (
    <section>
      <h1>Home</h1>
    </section>
  )
}

export default home
```

*./client/src/views/profile/_index.js_*
```javascript
import React from 'react'

const profile = () => {
  return (
    <section>
      <h1>Profile</h1>
    </section>
  )
}

export default profile
```

*./client/src/containers/Template/_index.js_*
```javascript
import React, {Component} from 'react'

class Template extends Component {
  render() {
    return (
      <div>
        <header>
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

Now that we have these files made, we're going to create the routing container that's going to connect all this information to our app.

```bash
# ./client
mkdir src/containers/Routing
touch src/containers/Routing/index.js
```

A note: as we create different containers, take note of how our application is structured as a series of nested containers.

We could hypothetically combine a number of them into a single large container but then it might be more difficult later on to reason about which information is being connected in which file.

Let's create our `Routing/index.js` file:

*./client/src/containers/Routing/_index.js_*
```javascript
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
    );
  }
}

export default Routing
```

Notice here how we're changing the location where we're bring in `ReduxStore`. This means we also need to change our app file:

*./client/src/containers/App/_index.js_*
```javascript
import React, { Component } from 'react'

import ReduxStore from '../ReduxStore'

class App extends Component {
  render() {
    return (
      <ReduxStore/>
    )
  }
}

export default App

```

Our site should be working again so let's fire things up!

```bash
# ./client
npm start
```

Things look good. Now try navigating to [http://localhost:3000/profile] (http://localhost:3000/profile)
