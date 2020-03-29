export interface UserTimelineState {
    ownPosts: UserTimelineItem[],
}

export type UserTimelineItem = {
    id: string,
    title: string,
    content: string,
    createdTs: string,
    senderFirstName: string,
    senderLastName: string,
};

export enum UserTimelineTypes {
    GET_ALL = 'GET_ALL',
    TIMELINE_LOADING = 'TIMELINE_LOADING',
}

export interface GetAllAction {
    type: UserTimelineTypes.GET_ALL,
    payload: UserTimelineItem[],
}

export type UserTimelineActions = GetAllAction;