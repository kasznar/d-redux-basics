import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {InputEvent} from "../../../App";
import {CommentList} from "./CommentList";
import {addCommentThunk} from "../actions/thunks/addCommentThunk";


export const CommentsPage = () => {
    const [newComment, setNewComment] = useState('');
    const dispatch = useDispatch();

    const handleChange=(e: InputEvent) => {
        setNewComment(e.target.value);
    }

    const handleAdd = () => {
        dispatch(addCommentThunk(newComment));
    }

    return (
        <>
            <input value={newComment} onChange={handleChange}/>
            <button onClick={handleAdd}>Add comment</button>

            <CommentList/>
        </>
    );
}