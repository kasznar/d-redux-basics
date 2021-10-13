import React, {FC} from "react";
import {Comment} from "./commentsSlice";
import {useAppDispatch} from "../../store/hooks";
import {commentDisliked, commentLiked} from "./commentActions";

export const CommentItem: FC<{comment: Comment}> = ({comment}) => {
    const dispatch = useAppDispatch();

    function handleLike() {
        dispatch(commentLiked(comment.id))
    }
    function handleDislike() {
        dispatch(commentDisliked(comment.id))
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