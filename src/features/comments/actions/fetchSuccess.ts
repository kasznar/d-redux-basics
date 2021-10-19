import {CommentActionTypes} from "./commentActionTypes";
import {Comment} from "../model";

export interface FetchSuccess {
    type: CommentActionTypes.FETCH_SUCCESS;
    payload: Comment[];
}

export const fetchSuccess = (payload: Comment[]) => {
    return {
        type: CommentActionTypes.FETCH_SUCCESS,
        payload
    }
}