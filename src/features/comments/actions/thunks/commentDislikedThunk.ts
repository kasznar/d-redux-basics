import {AppThunk} from "../../../../store/store";
import {patchCommentThunk} from "./patchCommentThunk";

export const commentDislikedThunk = (id: number): AppThunk => async (dispatch, getState) => {
    const {comments} = getState();
    const comment = comments.items.find(item=> item.id=== id);

    if (comment) {
        dispatch(patchCommentThunk(id, comment.likes-1))
    }
}