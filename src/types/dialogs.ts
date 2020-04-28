import {User} from "./users";

export type Dialog = {
    id: string,
    name: string,
    messages: DialogMessage[],
    participants: DialogParticipant[],
};

export type DialogMessage = {
    id: string,
    dialogId: string,
    content: string,
    createdTs: Date,
    sender: User,
    isRead: boolean,
};

export type FlatMessage = {
    id: string,
    dialogId: string,
    content: string,
    createdTs: Date,
    senderId: string,
};

export type DialogParticipant = {
    id: string,
    user: User[],
}

export interface DialogsState {
    sendMessageDialogStatus: boolean,
    dialogs: Dialog[],
    messages: DialogMessage[],
    unreadMessageCount: number,
}

export enum DialogActionsTypes {
    SEND_MESSAGE_DIALOG = 'SEND_MESSAGE_DIALOG',
    SET_DIALOGS = 'SET_DIALOGS',
    SET_MESSAGES = 'SET_MESSAGES',
    SET_MESSAGE = 'SET_MESSAGE',
    SET_MESSAGES_READ = 'SET_MESSAGES_READ',
    SET_UNREAD_COUNT = 'SET_UNREAD_COUNT',
    INCREASE_UNREAD_COUNT = 'INCREASE_UNREAD_COUNT',
}

export interface SendMessageDialogStatus {
    type: DialogActionsTypes.SEND_MESSAGE_DIALOG,
    payload: boolean,
}

export interface SetDialogs {
    type: DialogActionsTypes.SET_DIALOGS,
    payload: Dialog[],
}

export interface SetMessages {
    type: DialogActionsTypes.SET_MESSAGES,
    payload: DialogMessage[],
}

export interface SetMessage {
    type: DialogActionsTypes.SET_MESSAGE,
    payload: DialogMessage,
}

export interface SetMessagesRead {
    type: DialogActionsTypes.SET_MESSAGES_READ,
    read: boolean,
    dialogId: string,
}

export interface SetUnreadMessageCount {
    type: DialogActionsTypes.SET_UNREAD_COUNT,
    payload: number,
}

export interface IncreaseUnreadCount {
    type: DialogActionsTypes.INCREASE_UNREAD_COUNT,
    payload: number,
}

export type DialogsActions = SendMessageDialogStatus |
    SetDialogs |
    SetMessages |
    SetMessage |
    SetMessagesRead |
    SetUnreadMessageCount |
    IncreaseUnreadCount;