import {Comment} from "../model";
import {commentActionsTypes} from "./actionTypes";


export interface FetchSuccessAction {
    type: commentActionsTypes.FETCH_LIST_SUCCESS;
    payload: Comment[];
}

export const fetchSuccess = (result: Comment[]): FetchSuccessAction => {
    return {
        type: commentActionsTypes.FETCH_LIST_SUCCESS,
        payload: result
    }
}