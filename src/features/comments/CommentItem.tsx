import React, {FC} from "react";
import {Comment} from "./commentsSlice";
import {useDispatch} from "react-redux";
import {CommentActionTypes} from "./commentActionTypes";

export const CommentItem: FC<{comment: Comment}> = ({comment}) => {
    const dispatch = useDispatch();


    function handleLike() {
        dispatch({type: CommentActionTypes.LIKED, payload: comment.id})
    }

    function handleDislike() {
        dispatch({type: CommentActionTypes.DISLIKE, payload: comment.id})
    }


    return (<div className="Comment">
        {comment.text}
        <div>
            likes: {comment.likes}
            &nbsp;
            <button onClick={handleLike}>like</button>
            <button onClick={handleDislike}>dislike</button>
        </div>
    </div>)
}