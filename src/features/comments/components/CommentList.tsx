import React, {useEffect} from "react";
import {CommentItem} from "./CommentItem";
import {useAppSelector} from "../../../store/hooks";
import {useDispatch} from "react-redux";
import {fetchCommentsThunk} from "../actions/thunks/fetchCommentsThunk";
import {selectComments} from "../commentsSlice";

export const CommentList = ()=> {
    const comments = useAppSelector(selectComments)
    const status = useAppSelector(state => state.comments.status);
    const error = useAppSelector(state => state.comments.error);
    const dispatch = useDispatch()
    const ErrorState = <>
        error... reload... page...
        <br/>
        {error}
    </>

    useEffect(()=>{
        dispatch(fetchCommentsThunk());
    },[dispatch])

    return (<>
        <br/>
        {status === 'loading' && 'loading...'}
        {status === 'error' && ErrorState}
        {comments.map((comment)=>(<CommentItem key={comment.id} comment={comment}/>))}
    </>)
}