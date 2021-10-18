import {RootState} from "../../store/store";
import {CommentsState} from "./model";
import CommentAction from "./actions";
import {commentActionsTypes} from "./actions/actionTypes";


const initialState: CommentsState = {
    status: "idle",
    items: [],
};

export default function commentsSlice(state = initialState, action: CommentAction): CommentsState {
    switch (action.type) {
        case commentActionsTypes.FETCH_PENDING: {
            return {
                ...state,
                status: "loading"
            }
        }
        case commentActionsTypes.FETCH_LIST_SUCCESS: {
            return {
                ...state,
                status: 'success',
                items: action.payload
            }
        }
        case commentActionsTypes.FETCH_FAILED: {
            return {
                ...state,
                status: "error",
                items: []
            }
        }
        default:
            return state
    }
}

export const selectComments = (state: RootState) => state.comments.items;
export const selectCommentsStatus = (state: RootState) => state.comments.status;
