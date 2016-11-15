import { createStore} from 'redux'

import reducers from '../reducers'

const configureStore = () => {

  const store = createStore(reducers)

  return store
}

const store = configureStore()

export default store
