import React, {useState} from "react";
import {CommentList} from "./CommentList";
import {useAppDispatch} from "../../store/hooks";
import {InputEvent} from "../../shared/types";

export const CommentsPage = () => {
    const [newComment, setNewComment] = useState('');
    const dispatch = useAppDispatch();

    const handleChange = (e: InputEvent) => {
        setNewComment(e.target.value)
    }
    const handleAdd = () => {
        dispatch({
            type: 'comments/commentAdded',
            payload: newComment
        })
    }


    return (<>
        <div className="NewComment">
            <h2>Write comment</h2>
            <input value={newComment} onChange={handleChange}/>
            <button onClick={handleAdd}>Add Comment</button>
        </div>

        <CommentList/>
    </>)
}