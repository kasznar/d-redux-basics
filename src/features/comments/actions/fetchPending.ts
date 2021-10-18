import {commentActionsTypes} from "./actionTypes";

export interface FetchPending {
    type: commentActionsTypes.FETCH_PENDING;
}

export const fetchPending = (): FetchPending => {
    return {
        type: commentActionsTypes.FETCH_PENDING,
    }
}