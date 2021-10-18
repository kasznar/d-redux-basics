import {Comment} from "./model";

export enum commentActionsTypes {
    DISLIKE = 'comments/commentDisliked',
    LIKE = 'comments/commentLiked',
    ADDED = 'comments/commentAdded',
    FETCH_PENDING = 'comments/pending',
    FETCH_SUCCESS = 'comments/success',
    FETCH_FAILED = 'comments/failed',
}


export interface AddAction {
    type: commentActionsTypes.ADDED;
    payload: string;
}

export interface CommentLikedAction {
    type: commentActionsTypes.LIKE | commentActionsTypes.DISLIKE;
    payload: number;
}

export interface FetchPendingAction {
    type: commentActionsTypes.FETCH_PENDING;
}

export interface FetchSuccessAction {
    type: commentActionsTypes.FETCH_SUCCESS;
    payload: Comment[];
}


type CommentAction =
    AddAction
    | FetchSuccessAction
    | FetchPendingAction
    | CommentLikedAction;


export default CommentAction;