import {FetchSuccess} from "./fetchSuccess";
import {FetchPending} from "./fetchPending";
import {FetchError} from "./fetchError";

type CommentAction = FetchSuccess | FetchPending | FetchError;

export default CommentAction;