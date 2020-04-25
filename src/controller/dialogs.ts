import {ApiRequest} from "../actions/api-tool";

export const getAllDialogs = (userId: string) => {
    return ApiRequest.withAuth(
        'GET',
        `/users/${userId}/dialogs`,
        {}
    );
};

export const getMessages = (dialogId: string) => {
    return ApiRequest.withAuth(
        'GET',
        `/dialogs/${dialogId}`,
        {}
    );
};