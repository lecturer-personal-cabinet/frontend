import {DialogActionsTypes, DialogsActions, DialogsState} from "../types/dialogs";

const initialState: DialogsState = {
    sendMessageDialogStatus: false,
};

export function dialogsStateReducer(
    state = initialState,
    action: DialogsActions
): DialogsState {
    switch(action.type) {
        case DialogActionsTypes.SEND_MESSAGE_DIALOG:
            return {
                ...state,
                sendMessageDialogStatus: action.payload,
            };
        default: return state;
    }
}