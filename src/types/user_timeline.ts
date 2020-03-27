import {User} from "./users";

export interface UserTimelineState {

}

export type UserTimelineItem = {
    id: string,
    title: string,
    content: string,
    timestamp: string,
    sender: User,
};

export enum UserTimelineTypes {
    DUMMY = 'DUMMY',
}

export interface DummyAction {
    type: UserTimelineTypes.DUMMY
}

export type UserTimelineActions = DummyAction;