import React, {useCallback, useEffect} from "react";
import {useAppSelector} from "../../../store/hooks";
import {CommentItem} from "./CommentItem";
import {selectComments, selectCommentsStatus} from "../commentsSlice";
import {useDispatch} from "react-redux";
import {thunkFetchComments} from "../actions/thunks/fetchCommentsThunk";

export const CommentList = () => {
    const comments = useAppSelector(selectComments);
    const status = useAppSelector(selectCommentsStatus);
    const dispatch = useDispatch();

    const fetchComments = useCallback(
        ()=> {
            dispatch(thunkFetchComments())
        }, [dispatch]
    )

    useEffect(()=>{
        fetchComments();
    }, [fetchComments])

    const ErrorState = <>
        error occurred... please... reload...
        <br/>
        <button onClick={fetchComments}>reload</button>
    </>

    return (
        <>
            {status === 'loading' && 'loading...'}
            {status === 'error' && ErrorState}
            {comments.map((comment) => (<CommentItem key={comment.id} comment={comment}/>))}
        </>
    );
}