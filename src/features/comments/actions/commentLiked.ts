import {CommentActionTypes} from "./commentActionTypes";

export interface CommentLiked {
    type: CommentActionTypes.LIKED;
    payload: number,
}

export function commentLiked(id: number) {
    return {
        type: CommentActionTypes.LIKED,
        payload: id
    }
}