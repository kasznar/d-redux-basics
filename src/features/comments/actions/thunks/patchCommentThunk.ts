import {patchLikes} from "../../../../api/comments";
import {fetchPending} from "../fetchPending";
import {fetchError} from "../fetchError";
import {thunkFetchComments} from "./fetchCommentsThunk";
import {AppThunk} from "../../../../store/store";

export const patchCommentThunk = (id: number, likes: number): AppThunk => async (dispatch) => {
    dispatch(fetchPending());

    try {
        await patchLikes(id, likes);
        await dispatch(thunkFetchComments())
    } catch (e) {
        dispatch(fetchError('' + e))
    }

}