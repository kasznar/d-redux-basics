import { createStore } from 'redux'
import rootReducer from './reducer'

/*
const composedEnhancer = composeWithDevTools(
    // Add whatever middleware you actually want to use here
    applyMiddleware()
    // other store enhancers if any
)
 */


declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION__: any; }
}

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch