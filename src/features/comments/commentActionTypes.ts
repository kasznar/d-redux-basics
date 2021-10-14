export enum CommentActionTypes {
    ADDED = 'comments/commentAdded',
    LIKED = 'comments/commentLiked',
    DISLIKE = 'comments/commentDisliked'
}

export interface CommentAdded {
    type: CommentActionTypes.ADDED;
    payload: string,
}

export interface CommentLiked {
    type: CommentActionTypes.LIKED;
    payload: number,
}

export interface CommentDisliked {
    type: CommentActionTypes.DISLIKE;
    payload: number,
}

type CommentAction = CommentAdded | CommentLiked | CommentDisliked;

export default CommentAction;