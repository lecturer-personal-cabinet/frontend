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

export const updateReadStatus = (dialogId: string, status: boolean, exclude: string) => {
  return ApiRequest.withAuth(
      'POST',
      `/dialogs/${dialogId}/messages/is-read`,
      {
          status,
          'excludeParticipant': exclude
      }
  );
};

export const getMessagesCount = (userId: string, isRead: boolean) => {
  return ApiRequest.withAuth(
      'GET',
      `/users/${userId}/dialogs/messages/count?isRead=${isRead}`,
      {}
  )
};