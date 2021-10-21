import {AppThunk} from "../../../../store/store";
import {fetchPending} from "../fetchPending";
import {patchLikes} from "../../../../api/comments";
import {fetchCommentsThunk} from "./fetchCommentsThunk";
import {fetchError} from "../fetchError";

export const patchCommentThunk = (id: number, likes: number): AppThunk => async (dispatch) => {
    dispatch(fetchPending());

    try {
        await patchLikes(id, likes);
        await dispatch(fetchCommentsThunk())
    } catch (e) {
        dispatch(fetchError(''+e))
    }
}