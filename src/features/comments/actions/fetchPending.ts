import {CommentActionTypes} from "./commentActionTypes";

export interface FetchPending {
    type: CommentActionTypes.FETCH_PENDING;
}

export const fetchPending = (): FetchPending => {
    return {
        type: CommentActionTypes.FETCH_PENDING
    }
}