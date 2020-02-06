import {INotificationState, NotificationActions, NotificationsActionsTypes} from "./types";

const initialState: INotificationState = {};

export function notificationsReducer(
    state = initialState,
    action: NotificationActions
): INotificationState {
    switch(action.type) {
        case NotificationsActionsTypes.SHOW_TOAST:
            return state;
        default:
            return state;
    }
}
