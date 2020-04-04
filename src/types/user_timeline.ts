export interface UserTimelineState {
    posts: UserTimelineItem[],
}

export type UserTimelineItem = {
    id?: string,
    title: string,
    content: string,
    createdTs: string,
    senderFirstName: string,
    senderLastName: string,
};

export enum UserTimelineTypes {
    SAVE_ALL = 'SAVE_ALL',
    TIMELINE_LOADING = 'TIMELINE_LOADING',
    SAVE_TIMELINE_POST = 'SAVE_TIMELINE_POST'
}

export interface SaveAllAction {
    type: UserTimelineTypes.SAVE_ALL,
    payload: UserTimelineItem[],
}

export interface SaveTimelinePost {
    type: UserTimelineTypes.SAVE_TIMELINE_POST,
    payload: UserTimelineItem
}

export type UserTimelineActions = SaveAllAction | SaveTimelinePost;