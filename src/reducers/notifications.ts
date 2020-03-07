import {INotificationState, NotificationActions, NotificationsActionsTypes} from "../types/notifications";
import {showNotification} from "../actions/notifications";

const initialState: INotificationState = {};

export function notificationsReducer(
    state = initialState,
    action: NotificationActions
): INotificationState {
    switch(action.type) {
        case NotificationsActionsTypes.SHOW_TOAST:
            showNotification(action.payload.message, action.payload.id);
            return state;
        default:
            return state;
    }
}
