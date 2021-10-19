import {Dispatch} from "redux";
import {getComments} from "../../../../api/comments";
import {fetchSuccess} from "../fetchSuccess";


export const fetchCommentsThunk = () => async (dispatch: Dispatch) => {
        const comments = await getComments();
        dispatch(fetchSuccess(comments));
}
