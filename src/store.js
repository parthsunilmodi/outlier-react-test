import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'

import indexReducer from './Reducers/index'

const enhancers = []

const middleware = [ thunk ]

if (process.env.NODE_ENV === 'development') {
  /* eslint-disable */
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  /* eslint-enable */

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension)
  }
}

const composeEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

export default createStore(indexReducer, composeEnhancers)
