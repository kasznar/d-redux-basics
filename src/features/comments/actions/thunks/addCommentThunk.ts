import {AppThunk} from "../../../../store/store";
import {fetchPending} from "../fetchPending";
import {postComment} from "../../../../api/comments";
import {fetchCommentsThunk} from "./fetchCommentsThunk";
import {fetchError} from "../fetchError";


export const addCommentThunk = (text: string): AppThunk => async (dispatch)=> {
    dispatch(fetchPending());

    try {
        await postComment({
            likes: 0,
            text
        })
        await dispatch(fetchCommentsThunk())
    } catch (e) {
        dispatch(fetchError(''+e))
    }
}