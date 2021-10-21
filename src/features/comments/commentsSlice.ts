import {CommentActionTypes} from "./actions/commentActionTypes";
import CommentAction from "./actions";
import {Comment} from "./model";
import {RootState} from "../../store/store";

 interface CommentsState {
    items: Comment[];
    status: 'idle' | 'loading' | 'error' | 'success';
    error?: string;
}

const initialState: CommentsState = {
     items: [],
    status: "idle",
};

function nextCommentId(comments: Comment[]) {
    let max = -1;
    comments.forEach((comment)=>{
        if (comment.id > max) {
            max = comment.id;
        }
    })

    return max + 1;
}

export default function commentsSlice(state = initialState, action: CommentAction): CommentsState {
    switch (action.type) {
        case CommentActionTypes.FETCH_SUCCESS: {
            return {
                ...state,
                status: "success",
                items: action.payload
            };
        }
        case CommentActionTypes.FETCH_PENDING: {
            return {
                ...state,
                status: "loading",
            }
        }
        case CommentActionTypes.FETCH_ERROR: {
            return {
                status: "error",
                items: [],
                error: action.payload
            }
        }
        default:
            return state;
    }
}


export const selectComments = (state: RootState) => state.comments.items;