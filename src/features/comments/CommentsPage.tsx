import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CommentActionTypes} from "./commentActionTypes";
import {InputEvent} from "../../App";
import {CommentList} from "./CommentList";


export const CommentsPage = () => {
    const [newComment, setNewComment] = useState('');
    const dispatch = useDispatch();

    const handleChange=(e: InputEvent) => {
        setNewComment(e.target.value);
    }

    const handleAdd = () => {
        dispatch({type: CommentActionTypes.ADDED, payload: newComment})
    }

    return (
        <>
            <input value={newComment} onChange={handleChange}/>
            <button onClick={handleAdd}>Add comment</button>

            <CommentList/>
        </>
    );
}