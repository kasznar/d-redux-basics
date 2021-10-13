interface AddAction {
    type: 'comments/commentAdded';
    payload: string;
}

enum commentActions {
    DISLIKE = 'comments/commentDisliked',
    LIKE = 'comments/commentLiked'
}


export const commentLiked = (id: number) => {
    return {
        type: commentActions.LIKE,
        payload: id,
    }
}

export const commentDisliked = (id: number) => {
    return {
        type: commentActions.DISLIKE,
        payload: id
    }
}

type CommentAction = AddAction | ReturnType<typeof commentLiked | typeof commentDisliked>;

export default CommentAction;