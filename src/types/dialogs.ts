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
};

export type DialogParticipant = {
    id: string,
    user: User[],
}

export interface DialogsState {
    sendMessageDialogStatus: boolean,
    dialogs: Dialog[],
    messages: DialogMessage[],
}

export enum DialogActionsTypes {
    SEND_MESSAGE_DIALOG = 'SEND_MESSAGE_DIALOG',
    SET_DIALOGS = 'SET_DIALOGS',
    SET_MESSAGES = 'SET_MESSAGES',
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

export type DialogsActions = SendMessageDialogStatus | SetDialogs | SetMessages;