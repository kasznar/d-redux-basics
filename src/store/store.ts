import {AnyAction, applyMiddleware, createStore} from 'redux'
import rootReducer from './reducer'
import thunk, {ThunkAction} from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

const enhancers = composeWithDevTools(
    applyMiddleware(thunk)
)

const store = createStore(rootReducer, enhancers)
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    AnyAction
    >