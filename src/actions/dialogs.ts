import {Dialog, DialogActionsTypes, DialogMessage} from "../types/dialogs";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../store";
import {Action} from "typesafe-actions";
import {getAllDialogs, getMessages} from "../controller/dialogs";
import {setDialogLoading, setDialogsLoading} from "./loadings";

export const getDialogsAction = (userId: string): ThunkAction<void, RootState, null, Action<string>> => async dispatch => {
    try {
        const result = await getAllDialogs(userId);
        dispatch(setDialogs(result.data));
        dispatch(setDialogsLoading(false));
    } catch(e) {
        console.error(e);
    }
};

export const getMessagesAction = (dialogId: string): ThunkAction<void, RootState, null, Action<string>> => async dispatch => {
    try {
        const result = await getMessages(dialogId);
        dispatch(setMessages(result.data));
        dispatch(setDialogLoading(false));
    } catch (e) {
        console.error(e);
    }
};

export function setSendMessageDialogState(open: boolean) {
    return {
        type: DialogActionsTypes.SEND_MESSAGE_DIALOG,
        payload: open,
    }
}

export function setDialogs(dialogs: Dialog[]) {
    return {
        type: DialogActionsTypes.SET_DIALOGS,
        payload: dialogs,
    }
}

export function setMessages(messages: DialogMessage) {
    return {
        type: DialogActionsTypes.SET_MESSAGES,
        payload: messages,
    }
}