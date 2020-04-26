import {INotificationState, NotificationActions, NotificationsActionsTypes} from "../types/notifications";
import {showNotification} from "../actions/notifications";

const initialState: INotificationState = {
    messageCounts: new Map(),
};

export function notificationsReducer(
    state = initialState,
    action: NotificationActions
): INotificationState {
    switch(action.type) {
        case NotificationsActionsTypes.SHOW_TOAST:
            showNotification(action.payload.message, action.payload.id);
            return state;
        case NotificationsActionsTypes.CHANGE_MESSAGE_COUNT:
            return {
                ...state,
                messageCounts: state.messageCounts.set(action.payload.dialogId, action.payload),
            };
        default:
            return state;
    }
}
