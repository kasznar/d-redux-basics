import {CommentAdded} from "./commentAdded";
import {CommentLiked} from "./commentLiked";
import {CommentDisliked} from "./commentDisliked";

type CommentAction = CommentAdded | CommentLiked | CommentDisliked;

export default CommentAction;