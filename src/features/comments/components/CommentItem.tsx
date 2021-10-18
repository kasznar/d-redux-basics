import React, {FC} from "react";
import {Comment} from "../model";
import {useDispatch} from "react-redux";
import {commentDislikedThunk, commentLikedThunk} from "../actions/thunks";


export const CommentItem: FC<{comment: Comment}> = ({comment}) => {
    const dispatch = useDispatch();

    function handleLike() {
        dispatch(commentLikedThunk(comment.id))
    }
    function handleDislike() {
        dispatch(commentDislikedThunk(comment.id))
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