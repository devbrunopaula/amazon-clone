import allReducers from "./reducers"
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"

const store = createStore(
  allReducers,
  composeWithDevTools()
  // applyMiddleware(...middleware)
  // other store enhancers if any
)

export default store
