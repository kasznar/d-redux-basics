import {FetchSuccessAction} from "./fetchSuccess";
import {FetchPending} from "./fetchPending";
import {FetchErrorAction} from "./fetchError";


type CommentAction =
    | FetchSuccessAction
    | FetchPending
    | FetchErrorAction;

export default CommentAction;