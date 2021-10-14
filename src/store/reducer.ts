import {combineReducers} from "redux";
import commentsSlice from "../features/comments/commentsSlice";

const rootReducer = combineReducers({
    comments: commentsSlice,
})

export default rootReducer;