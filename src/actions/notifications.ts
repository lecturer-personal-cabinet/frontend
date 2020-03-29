import nanoid from "nanoid";
import {toast} from "react-toastify";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../store";
import {Action} from "typesafe-actions";

export const showNotification = (message: string, id: string = nanoid())
    : ThunkAction<void, RootState, null, Action<string>> => async dispatch => {
    toast.info(message, {
        toastId: id,
    });
};

export const showError = (message: string, id: string = nanoid())
    : ThunkAction<void, RootState, null, Action<string>> => async dispatch => {
    toast.error(message, {
        toastId: id,
    });
};
