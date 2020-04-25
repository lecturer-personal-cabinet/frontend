import {DialogActionsTypes, DialogsActions, DialogsState} from "../types/dialogs";

const initialState: DialogsState = {
    sendMessageDialogStatus: false,
    dialogs: [],
    messages: [],
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
        default:
            return state;
    }
}