import CommentAction, {CommentActionTypes} from "./commentActionTypes";

export interface Comment{
    id: number,
    text: string,
    likes: number,
}

type CommentsState = Comment[];

const initialState: CommentsState = [];

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
        case CommentActionTypes.ADDED: {
            return [
                ...state,
                {
                    id: nextCommentId(state),
                    text: action.payload,
                    likes: 0,
                }
            ]
        }
        case CommentActionTypes.LIKED: {
            return state.map((comment) => {
                if (comment.id !== action.payload) {
                    return comment;
                }

                return {...comment, likes: comment.likes+1}
            })
        }
        case CommentActionTypes.DISLIKE: {
            return state.map((comment) => {
                if (comment.id !== action.payload) {
                    return comment;
                }

                return {...comment, likes: comment.likes-1}
            })
        }
        default:
            return state;
    }

}