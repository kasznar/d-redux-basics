import {CommentActionTypes} from "./commentActionTypes";

export interface CommentAdded {
    type: CommentActionTypes.ADDED;
    payload: string,
}

export function commentAdded(text: string): CommentAdded {
    return {
        type: CommentActionTypes.ADDED,
        payload: text,
    }
}