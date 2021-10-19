import {CommentAdded} from "./commentAdded";
import {CommentLiked} from "./commentLiked";
import {CommentDisliked} from "./commentDisliked";
import {FetchSuccess} from "./fetchSuccess";
import {FetchPending} from "./fetchPending";
import {FetchError} from "./fetchError";

type CommentAction = CommentAdded | CommentLiked | CommentDisliked | FetchSuccess | FetchPending | FetchError;

export default CommentAction;