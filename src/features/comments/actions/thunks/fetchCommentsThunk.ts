import {Dispatch} from "redux";
import {getComments} from "../../../../api/comments";
import {fetchSuccess} from "../fetchSuccess";
import {fetchPending} from "../fetchPending";
import {fetchError} from "../fetchError";


export const fetchCommentsThunk = () => async (dispatch: Dispatch) => {
        dispatch(fetchPending());

        try {
            const comments = await getComments();
            dispatch(fetchSuccess(comments));
        } catch (e) {
            dispatch(fetchError(''+e));
        }
}
