import axios from "axios";
import {Comment} from "../features/comments/model";

export interface NewComment {
    text: string,
    likes: number,
}

export const getComments = async () => {
    const res = await axios.get<Comment[]>("/comments", {
        params: { _sort: "id", _order: "desc" },
    });
    return res.data;
};

export const postComment = async (newComment: NewComment) => {
    const res = await axios.post("/comments", newComment)
    return res.data;
}

export const patchLikes = async (id: number, likes: number) => {
    const res = await axios.patch(`/comments/${id}`, {likes})
    return res.data;
}

