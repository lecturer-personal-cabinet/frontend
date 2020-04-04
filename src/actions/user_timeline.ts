import {UserTimelineItem, UserTimelineTypes} from "../types/user_timeline";
// @ts-ignore
import {ApiRequest} from "./api-tool";
// @ts-ignore
import {ThunkAction} from "redux-thunk";
// @ts-ignore
import {RootState} from "../store";
// @ts-ignore
import {Action} from "typesafe-actions";
import {setTimelineLoading} from "./loadings";
import {User} from "../types/users";
import {showError, showNotification} from "./notifications";
import {saveTimelinePost} from "../controller/timeline";
import { format } from "date-fns";

export const getAllPosts = (userId: string): ThunkAction<void, RootState, null, Action<string>> => async dispatch => {
    await ApiRequest.getWithAuth({
        endpoint: `/users/${userId}/timeline/posts`,
        data: {},
        success: (response) => {
            dispatch(setPosts(response.data));
            dispatch(setTimelineLoading(false));
        },
        failure: (error: any) => {

        }
    });
};

export const savePost = (userId: string, title: string, content: string, sender: User)
    : ThunkAction<void, RootState, null, Action<string>> => async dispatch => {
    const timelineItem = {
        title,
        content,
        createdTs: format(Date.now(), "yyyy-MM-dd HH:mm:ss"),
        senderFirstName: sender.firstName,
        senderLastName: sender.lastName
    };

    try {
        const result = await saveTimelinePost(userId, timelineItem);
        dispatch(savePostAction(result.data));
        dispatch(showNotification('Пост успешно сохраненен.'))
    } catch (e) {
        dispatch(showError('Ошибка во время сохранения.'));
    }
};

export function setPosts(posts: UserTimelineItem[]) {
    return {
        type: UserTimelineTypes.SAVE_ALL,
        payload: posts,
    }
}

export function savePostAction(post: UserTimelineItem) {
    return {
        type: UserTimelineTypes.SAVE_TIMELINE_POST,
        payload: post
    }
}