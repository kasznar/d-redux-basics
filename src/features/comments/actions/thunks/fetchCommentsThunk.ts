import {Dispatch} from "redux";
import {getComments} from "../../../../api/comments";
import {fetchPending} from "../fetchPending";
import {fetchSuccess} from "../fetchSuccess";
import {fetchError} from "../fetchError";



export const thunkFetchComments = () => async (dispatch: Dispatch) => {
    dispatch(fetchPending());

    try {
        const comments = await getComments();
        dispatch(fetchSuccess(comments))
    } catch (e) {
        dispatch(fetchError('' + e))
    }

}