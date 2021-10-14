import React from "react";
import {CommentItem} from "./CommentItem";
import {useAppSelector} from "../../store/hooks";

export const CommentList = ()=> {
    const comments = useAppSelector((state) => state.comments)

    return (<>
        {comments.map((comment)=>(<CommentItem key={comment.id} comment={comment}/>))}
    </>)
}