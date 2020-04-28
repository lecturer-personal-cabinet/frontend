import {DialogActionsTypes, DialogsActions, DialogsState} from "../types/dialogs";

const initialState: DialogsState = {
    sendMessageDialogStatus: false,
    dialogs: [],
    messages: [],
    unreadMessageCount: 0,
};

export function dialogsStateReducer(
    state = initialState,
    action: DialogsActions
): DialogsState {
    switch (action.type) {
        case DialogActionsTypes.SEND_MESSAGE_DIALOG:
            return {...state, sendMessageDialogStatus: action.payload};
        case DialogActionsTypes.SET_DIALOGS:
            return {...state, dialogs: action.payload};
        case DialogActionsTypes.SET_MESSAGES:
            return {...state, messages: action.payload};
        case DialogActionsTypes.SET_UNREAD_COUNT:
            return {...state, unreadMessageCount: action.payload};
        case DialogActionsTypes.INCREASE_UNREAD_COUNT:
            return {...state, unreadMessageCount: state.unreadMessageCount + action.payload};
        case DialogActionsTypes.SET_MESSAGE:
            const modifiedDialog = state.dialogs.find(dialog => dialog.id === action.payload.dialogId);
            modifiedDialog?.messages.push(action.payload);
            return {
                ...state,
                messages: [...state.messages, action.payload],
                dialogs: state.dialogs.map(dialog => {
                    if (dialog.id === modifiedDialog?.id) return modifiedDialog;
                    return dialog;
                })
            };
        default:
            return state;
    }
}