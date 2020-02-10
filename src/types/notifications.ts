export type Notification = {
    id?: string,
    message: string
};

export interface INotificationState {}

export enum NotificationsActionsTypes {
    SHOW_TOAST = 'SHOW_TOAST',
}

export interface ShowToastAction {
    type: NotificationsActionsTypes.SHOW_TOAST;
    payload: Notification;
}

export type NotificationActions = ShowToastAction;
