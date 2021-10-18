import {postComment} from "../../../../api/comments";
import {fetchPending} from "../fetchPending";
import {fetchError} from "../fetchError";
import {thunkFetchComments} from "./fetchCommentsThunk";
import {AppThunk} from "../../../../store/store";

export const addCommentThunk = (text: string): AppThunk => async (dispatch) => {
    dispatch(fetchPending());

    try {
        await postComment({
            likes: 0,
            text
        });
        await dispatch(thunkFetchComments())
    } catch (e) {
        dispatch(fetchError('' + e))
    }

}