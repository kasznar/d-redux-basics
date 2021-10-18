import React, {useEffect} from "react";
import {useAppSelector} from "../../store/hooks";
import {CommentItem} from "./CommentItem";
import {selectComments} from "./commentsSlice";
import {useDispatch} from "react-redux";
import {thunkFetchComments} from "./commentActionCreators";

export const CommentList = () => {
    const comments = useAppSelector(selectComments);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(thunkFetchComments())
    }, [dispatch])

    return (
        <>
            {comments.map((comment) => (<CommentItem key={comment.id} comment={comment}/>))}
        </>
    );
}