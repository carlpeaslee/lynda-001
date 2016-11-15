# Chapter 7 redux2


The next thing we're going to do is enable `redux-saga` so that our application can more easily deal with asynchronous requests.

Without any modifications, redux is built to keep you from performing impure tasks within actions –– like, for instance, making a call to an API.

Another library people often use is called `redux-thunk`.

```bash
# ./client
npm install redux-saga --save
```

We will make a new file in our actions folder for our sagas.

```bash
# ./client
touch src/actions/saga.js
```

...and then go edit that file...

_*`./src/actions/index.js`*_
```javascript

export function* testSaga() {
  console.log('Hello this is saga!')
}


export function* rootSaga() {
  yield [
    testSaga()
  ]
}
```

Next, we need to set up some middleware in our store configuration so that redux knows how to handle redux-saga actions.

And while we're at it, we're also going to enable redux's devtools to help us track state during development.

```bash
# ./client
npm install redux-devtools-extension --save
```

If you want to use `redux-devtools-extension`, you should also have the Chrome redux devtools extension installed in your browser.

We are going to bring in `createSagaMiddleware` from `redux-saga`,  `applyMiddleware` from `redux`, and `composeWithDevTools` from `redux-devtools-extension/developmentOnly` (If you don't want to use Redux Devtools, you can use `compose` from `redux` instead.)

_*`./src/store/index.js`*_
```javascript
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import {rootSaga} from '../actions/saga'


import reducers from '../reducers'

//we'll initialize our saga middleware
const sagaMiddleware = createSagaMiddleware()

//and then make what's called an enhancer
const enhancer = composeWithDevTools(
  applyMiddleware(sagaMiddleware),
)

//set up an empty default initialState variable for now
const INITIAL_STATE = {}

const configureStore = () => {

  //pass our enhancer into createStore (along w)
  const configuration = createStore(reducers, INITIAL_STATE, enhancer)

  return configuration
}

const store = configureStore()

//and then we'll connect our rootSaga
sagaMiddleware.run(rootSaga)


export default store
```

Great, now let's start things up:

```bash
# ./client
npm start
```

If you check the console, you'll see our `console.log()` from `testSaga()` –– and if you open up your devtools and navigate to the redux tab, you should be able to see your applications state!
