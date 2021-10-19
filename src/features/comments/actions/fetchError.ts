import {CommentActionTypes} from "./commentActionTypes";

export interface FetchError {
    type: CommentActionTypes.FETCH_ERROR;
    payload: string;
}

export const fetchError = (payload: string): FetchError => {
    return {
        type: CommentActionTypes.FETCH_ERROR,
        payload
    }
}