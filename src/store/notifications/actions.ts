import {NotificationsActionsTypes, ShowToastAction} from "./types";
import nanoid from "nanoid";
import {toast} from "react-toastify";

export function showNotification(message: string, id: string = nanoid()): ShowToastAction {
    toast.info(message, {
        toastId: id,
    });
    return {
        type: NotificationsActionsTypes.SHOW_TOAST,
        payload: {
            id: id,
            message: message,
        }
    }
}
