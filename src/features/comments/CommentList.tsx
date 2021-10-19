import React, {useEffect} from "react";
import {CommentItem} from "./CommentItem";
import {useAppSelector} from "../../store/hooks";
import {useDispatch} from "react-redux";
import {fetchCommentsThunk} from "./actions/thunks/fetchCommentsThunk";
import {selectComments} from "./commentsSlice";

export const CommentList = ()=> {
    const comments = useAppSelector(selectComments)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchCommentsThunk());
    },[dispatch])

    return (<>
        {comments.map((comment)=>(<CommentItem key={comment.id} comment={comment}/>))}
    </>)
}