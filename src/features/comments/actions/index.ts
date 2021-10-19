import {CommentAdded} from "./commentAdded";
import {CommentLiked} from "./commentLiked";
import {CommentDisliked} from "./commentDisliked";
import {FetchSuccess} from "./fetchSuccess";

type CommentAction = CommentAdded | CommentLiked | CommentDisliked | FetchSuccess;

export default CommentAction;