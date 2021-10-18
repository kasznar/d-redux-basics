import CommentAction, {commentActionsTypes} from "./commentActionsTypes";
import {RootState} from "../../store/store";
import {Comment, CommentsState} from "./model";


const initialState: CommentsState = {
    status: "idle",
    items: [],
};

function nextCommentId(comments: Comment[]) {
    let max = -1;

    comments.forEach((comment) => {
        if (comment.id > max) {
            max = comment.id;
        }
    })

    return max + 1;
}

export default function commentsSlice(state = initialState, action: CommentAction): CommentsState {
    switch (action.type) {
        case 'comments/commentAdded': {
            return {
                ...state,
                items: [
                    ...state.items,
                    {
                        id: nextCommentId(state.items),
                        text: action.payload,
                        likes: 0
                    },
                ]
            }
        }
        case commentActionsTypes.LIKE: {
            return {
                ...state,
                items: state.items.map((comment) => {
                    if (comment.id !== action.payload) {
                        return comment
                    }

                    return {
                        ...comment,
                        likes: comment.likes + 1,
                    }
                })
            }
        }
        case commentActionsTypes.DISLIKE: {
            return {
                ...state, items: state.items.map((comment) => {
                    if (comment.id !== action.payload) {
                        return comment
                    }

                    return {
                        ...comment,
                        likes: comment.likes - 1,
                    }
                })
            }
        }
        case commentActionsTypes.FETCH_SUCCESS: {
            return {
                ...state,
                items: action.payload
            }
        }
        default:
            return state
    }
}

export const selectComments = (state: RootState) => state.comments.items;
