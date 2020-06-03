import {Dialog, DialogActionsTypes, DialogMessage, FlatMessage} from "../types/dialogs";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../store";
import {Action} from "typesafe-actions";
import {getAllDialogs, getMessages, getMessagesCount, sendMessage, updateReadStatus} from "../controller/dialogs";
import {setDialogLoading, setDialogsLoading} from "./loadings";
import {getUser} from "../controller/users_controller";
import {getUserId} from "./authentication";

export const getDialogsAction = (userId: string): ThunkAction<void, RootState, null, Action<string>> => async dispatch => {
    try {
        const result = await getAllDialogs(userId);
        dispatch(setDialogs(result.data));
        dispatch(setDialogsLoading(false));
        // dispatch(getUnreadMessagesCount(getUserId()));
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

export const addNewMessage = (flatMessage: FlatMessage): ThunkAction<void, RootState, null, Action<string>> => async dispatch => {
    try {
        const userResult = await getUser(flatMessage.senderId);
        const message = {
            id: flatMessage.id,
            dialogId: flatMessage.dialogId,
            content: flatMessage.content,
            createdTs: flatMessage.createdTs,
            sender: userResult.data,
            isRead: false,
        };

        dispatch(setMessage(message));
        // dispatch(getUnreadMessagesCount(getUserId()));
    } catch(e) {
        console.error(e);
    }
};

export const changeReadStatusAction = (dialogId: string, status: boolean, exclude: string)
    : ThunkAction<void, RootState, null, Action<string>> => async dispatch => {
    try {
        await updateReadStatus(dialogId, status, exclude);
        // dispatch(getUnreadMessagesCount(getUserId()));
    } catch(e) {
        console.error(e);
    }
};

export const getUnreadMessagesCount = (userId: string)
    : ThunkAction<void, RootState, null, Action<string>> => async dispatch => {
    try {
        const result = await getMessagesCount(userId, false);
        dispatch(setUnreadMessagesCount(result.data.updatedMessagesNumber));
    } catch(e) {
        console.error(e);
    }
};

export const sendMessageAction = (senderId: string, receiverId: string, content: string)
    : ThunkAction<void, RootState, null, Action<string>> => async dispatch => {
  try {
      await sendMessage(senderId, receiverId, content);
  } catch(e) {
      console.error(e);
  }
};

export const sendMessageAndUpdateAction = (senderId: string, receiverId: string, content: string, dialogId: string)
    : ThunkAction<void, RootState, null, Action<string>> => async dispatch => {
    try {
        const result = await sendMessage(senderId, receiverId, content);
        dispatch(setMessage(result.data));
    } catch(e) {
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

export function setMessages(messages: DialogMessage[]) {
    return {
        type: DialogActionsTypes.SET_MESSAGES,
        payload: messages,
    }
}

export function setMessage(message: DialogMessage) {
    return {
        type: DialogActionsTypes.SET_MESSAGE,
        payload: message
    }
}

export function setMessagesRead(dialogId: string, read: boolean) {
    return {
        type: DialogActionsTypes.SET_MESSAGES_READ,
        read,
        dialogId,
    }
}

export function setUnreadMessagesCount(count: number) {
    return {
        type: DialogActionsTypes.SET_UNREAD_COUNT,
        payload: count
    }
}

export function increaseUnreadMessagesCount(payload: number) {
    return {
        type: DialogActionsTypes.INCREASE_UNREAD_COUNT,
        payload,
    }
}