import React, {useState} from "react";
import {CommentList} from "./CommentList";
import {InputEvent} from "../../../shared/types";
import {useDispatch} from "react-redux";
import {addCommentThunk} from "../actions/thunks";

export const CommentsPage = () => {
    const [newComment, setNewComment] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e: InputEvent) => {
        setNewComment(e.target.value)
    }
    const handleAdd = () => {
        dispatch(addCommentThunk(newComment))
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