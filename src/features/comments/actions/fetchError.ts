import {commentActionsTypes} from "./actionTypes";


export interface FetchErrorAction {
    type: commentActionsTypes.FETCH_FAILED;
    payload: string;
}

export const fetchError = (error: string): FetchErrorAction => {
    return {
        type: commentActionsTypes.FETCH_FAILED,
        payload: error
    }
}