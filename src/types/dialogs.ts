export interface DialogsState {
    sendMessageDialogStatus: boolean,
};

export enum DialogActionsTypes {
    SEND_MESSAGE_DIALOG = 'SEND_MESSAGE_DIALOG',
}

export interface SendMessageDialogStatus {
    type: DialogActionsTypes.SEND_MESSAGE_DIALOG,
    payload: boolean,
}

export type DialogsActions = SendMessageDialogStatus;