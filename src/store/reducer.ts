import { combineReducers } from 'redux'
import commentsSlice from "../features/comments/commentsSlice";

const rootReducer = combineReducers({
    // Define a top-level state field named `todos`, handled by `todosReducer`
    comments: commentsSlice,
})

export default rootReducer
