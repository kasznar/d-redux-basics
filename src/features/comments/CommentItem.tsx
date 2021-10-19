import React, {FC} from "react";
import {Comment} from "./commentsSlice";
import {useDispatch} from "react-redux";
import {commentLiked} from "./actions/commentLiked";
import {commentDislike} from "./actions/commentDisliked";

export const CommentItem: FC<{comment: Comment}> = ({comment}) => {
    const dispatch = useDispatch();


    function handleLike() {
        dispatch(commentLiked(comment.id))
    }

    function handleDislike() {
        dispatch(commentDislike(comment.id))
    }


    return (<div className="Comment">
        {comment.likes > 5 && '👌'}
        {comment.likes < -5 && '👎'}
        &nbsp;
        {comment.text}
        <div>
            likes: {comment.likes}
            &nbsp;
            <button onClick={handleLike}>like</button>
            <button onClick={handleDislike}>dislike</button>
        </div>
    </div>)
}