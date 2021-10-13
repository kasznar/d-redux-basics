import CommentAction from "./commentActions";
import {RootState} from "../../store/store";

export interface Comment {
    id: number;
    text: string;
    likes: number;
}

type CommentsState = Comment[];

const initialState: CommentsState = [];

function nextCommentId(comments: Comment[]) {
    let max = -1;

    comments.forEach((comment)=> {
        if (comment.id > max) {
            max = comment.id;
        }
    })

    return max + 1;
}

export default function commentsSlice(state = initialState, action: CommentAction): CommentsState {
    switch (action.type) {
        case 'comments/commentAdded': {
            return [
                ...state,
                {
                    id: nextCommentId(state),
                    text: action.payload,
                    likes: 0
                },
            ]
        }
        case 'comments/commentLiked': {
            return state.map((comment) => {
                if (comment.id !== action.payload) {
                    return comment
                }

                return {
                    ...comment,
                    likes: comment.likes+1,
                }
            })
        }
        case 'comments/commentDisliked': {
            return state.map((comment) => {
                if (comment.id !== action.payload) {
                    return comment
                }

                return {
                    ...comment,
                    likes: comment.likes-1,
                }
            })
        }
        default:
            return state
    }
}

export const selectComments = (state: RootState) => state.comments;
