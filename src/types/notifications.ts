export type Notification = {
    id?: string,
    message: string
};

export type MessageCount = {
  dialogId: string,
  count: number,
};

export interface INotificationState {
    messageCounts: Map<string, MessageCount>,
}

export enum NotificationsActionsTypes {
    SHOW_TOAST = 'SHOW_TOAST',
    CHANGE_MESSAGE_COUNT = 'CHANGE_MESSAGE_COUNT',
}

export interface ShowToastAction {
    type: NotificationsActionsTypes.SHOW_TOAST;
    payload: Notification;
}

export interface ChangeMessageCountAction {
    type: NotificationsActionsTypes.CHANGE_MESSAGE_COUNT,
    payload: MessageCount
}

export type NotificationActions = ShowToastAction | ChangeMessageCountAction;
