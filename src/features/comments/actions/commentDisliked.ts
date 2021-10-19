import {CommentActionTypes} from "./commentActionTypes";

export interface CommentDisliked {
    type: CommentActionTypes.DISLIKE;
    payload: number;
}

export function commentDislike(id: number) {
    return {
        type: CommentActionTypes.DISLIKE,
        payload: id
    }
}