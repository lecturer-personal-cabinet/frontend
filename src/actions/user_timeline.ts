import {UserTimelineItem, UserTimelineTypes} from "../types/user_timeline";
// @ts-ignore
import {ApiRequest} from "./api-tool";
// @ts-ignore
import {ThunkAction} from "redux-thunk";
// @ts-ignore
import {RootState} from "../store";
// @ts-ignore
import {Action} from "typesafe-actions";

export const getAllPosts = (userId: string): ThunkAction<void, RootState, null, Action<string>> => async dispatch => {
    await ApiRequest.getWithAuth({
        endpoint: `/users/${userId}/timeline/posts`,
        data: {},
        success: (response) => {
            dispatch(setPosts(response.data));
            dispatch(setTimelineLoading(false));
        },
        failure: () => {

        }
    });
};

export function setPosts(posts: UserTimelineItem[]) {
    return {
        type: UserTimelineTypes.GET_ALL,
        payload: posts,
    }
}

export function setTimelineLoading(loading: boolean) {
    return {
        type: UserTimelineTypes.TIMELINE_LOADING,
        loading,
    }
}