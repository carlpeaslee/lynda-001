# Chapter 5: Redux

In this chapter, we're going to show you how to implement redux.

Redux is a library that helps you manages your applications state. The idea is that your application with have a single, immutable source of Truth which informs your apps behaviors.

If you're not familiar with redux, I'll try to give brief explanations as I go along but it would be worth your time to read more about the library.

We need to create at least four files to get redux working. The order doesn't really matter so let's just jump in.

First, we need to install `redux` and `react-redux`:

```bash
# ./client/src
npm install redux react-redux --save
```

Let's start by creating a file for redux actions. We are going to try and group our actions together by feature.

We'll begin with the actions needed for our tictactoe game:

```bash
# ./client/src
touch actions/tictactoe.js
```

Go ahead and open up the file we just created and lets write our first code.

```javascript
/*    ./client/src/actions/tictactoe.js     */

//our action creator
export const TEST_REDUX = 'TEST_REDUX'

//the action
export function testRedux() {
  console.log('We are testing redux.')
  return {
    type: TEST_REDUX,
  }
}
```

The action ` testRedux()` will be the function we call from our component. The action creator `javascript TEST_REDUX` is the variable our reducer will need to understand the action type that gets passed to it by our action.

Speaking of reducers, let's build ours now.

Because I know we're going to want to grow this app further. I'm going to take the time now to build both a reducer AND a file that will combine all of our eventual reducers together using redux's `combineReducers()`.

We make our files:

```bash
# ./client/src
touch reducers/tictactoe.js reducers/index.js
```

Now let's make our first reducer:

```javascript
/*    ./client/src/reducers/tictactoe.js     */

//import our action creator
import {TEST_REDUX} from '../actions/tictactoe'

//create the reducer
function tictactoe (state = {}, action) {
  switch (action.type) {
    case TEST_REDUX: {
      return {
        ...state,
      }
    }
    default: {
      return {
        ...state,
      }
    }
  }
}

//export it
export default tictactoe
```

We should also make the file that will combine our reducers:

```javascript
/*    ./client/src/reducers/index.js     */

//bring in combineReducers
import {combineReducers} from 'redux'

//import the reducer we just created
import tictactoe from './tictactoe'

const reducers = combineReducers({
  tictactoe,
})

export default reducers

```

Next we are going to make the actual store.

```bash
# ./client/src
touch store/index.js
```

This file is where we will be creating our store, hooking in our reducers, and configuring eventual middleware.


```javascript
/*    ./client/src/store/index.js     */
//import redux tools
import { createStore} from 'redux'

//import our reducers
import reducers from '../reducers'

//create a function that will configure our store
const configureStore = () => {

  const store = createStore(reducers)

  return store
}

//create our store
const store = configureStore()

export default store
```

Our last step will be to connect out redux store to our react components with redux's `<Provider/>` component.

Let's create a separate container for our Redux Provider.

```bash
# ./client/src
mkrdir containers/ReduxStore
touch containers/ReduxStore/_index.js

```

...edit the file...

```javascript
/*    ./client/src/containers/ReduxStore/index.js     */

import React, { Component } from 'react'

//bring in Provider and our store
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
```

...and then integrate our store into our app...

```javascript
/*    ./client/src/containers/App/index.js     */

import React, { Component } from 'react'

//bring in ReduxStore

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

Now that we've hooked up our store, let's test things out.

```bash
# ./client
npm start
```

Great, and when I look at my site using react devtools, I see that my store is being successfully connected to the app via `<Provider/>`.
