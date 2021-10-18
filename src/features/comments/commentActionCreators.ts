import {Comment} from "./model";
import {Dispatch} from "redux";
import {getComments} from "../../api/comments";
import {commentActionsTypes, CommentLikedAction, FetchPendingAction, FetchSuccessAction} from "./commentActionsTypes";


export const commentLiked = (id: number): CommentLikedAction => {
    return {
        type: commentActionsTypes.LIKE,
        payload: id,
    }
}

export const commentDisliked = (id: number): CommentLikedAction => {
    return {
        type: commentActionsTypes.DISLIKE,
        payload: id
    }
}

export const fetchPending = (): FetchPendingAction => {
    return {
        type: commentActionsTypes.FETCH_PENDING,
    }
}

export const fetchSuccess = (result: Comment[]): FetchSuccessAction => {
    return {
        type: commentActionsTypes.FETCH_SUCCESS,
        payload: result
    }
}

export const fetchError = (error: string) => {
    return {
        type: commentActionsTypes.FETCH_FAILED,
        payload: error
    }
}

export const thunkFetchComments = () => async (dispatch: Dispatch) => {
    dispatch(fetchPending());

    try {
        const comments = await getComments();
        dispatch(fetchSuccess(comments))
    } catch (e) {
        dispatch(fetchError('' + e))
    }

}