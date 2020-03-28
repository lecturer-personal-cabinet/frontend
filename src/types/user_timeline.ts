import {User} from "./users";

export interface UserTimelineState {

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
    DUMMY = 'DUMMY',
}

export interface DummyAction {
    type: UserTimelineTypes.DUMMY
}

export type UserTimelineActions = DummyAction;