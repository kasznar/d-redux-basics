import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const enhancers = composeWithDevTools(
    applyMiddleware(thunk)
)

const store = createStore(rootReducer, enhancers)

export default store;

export type RootState = ReturnType<typeof store.getState>;