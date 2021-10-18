import axios from "axios";
import {Comment} from "../features/comments/model";

export const getComments = async () => {
    const res = await axios.get<Comment[]>("/comments", {
        params: { _sort: "id", _order: "desc" },
    });
    return res.data;
};