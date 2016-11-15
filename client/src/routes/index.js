import React from 'react'
import {Route, IndexRoute} from 'react-router'

import Template from '../containers/Template'

import Home from '../views/Home'
import Profile from '../views/Profile'

const createRoutes = () => {
  return (
    <Route path="/" component={Template}>
      <IndexRoute component={Home} />
      <Route
        path="/profile"
        component={Profile}
      />
    </Route>
  )
}

const routes = createRoutes()

export default routes
