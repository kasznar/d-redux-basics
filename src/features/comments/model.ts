export interface Comment {
    id: number;
    text: string;
    likes: number;
}

export type LoadingStatus = 'idle' | 'loading' | 'error' | 'success';

export interface CommentsState {
    items: Comment[],
    status: LoadingStatus
}
