import React from "react";
import {useAppSelector} from "../../store/hooks";
import {CommentItem} from "./CommentItem";
import {selectComments} from "./commentsSlice";

export const CommentList = () => {
    const comments = useAppSelector(selectComments);

    return (
        <>
            {comments.map((comment) => (<CommentItem key={comment.id} comment={comment}/>))}
        </>
    );
}