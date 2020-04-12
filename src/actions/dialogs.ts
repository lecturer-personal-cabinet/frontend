import {DialogActionsTypes} from "../types/dialogs";

export function setSendMessageDialogState(open: boolean) {
    return {
        type: DialogActionsTypes.SEND_MESSAGE_DIALOG,
        payload: open
    }
}