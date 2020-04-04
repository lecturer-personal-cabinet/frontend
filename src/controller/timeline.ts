import {ApiRequest} from "../actions/api-tool";
import {UserTimelineItem} from "../types/user_timeline";

export const saveTimelinePost = (userId: string, post: UserTimelineItem) => {
    return ApiRequest.withAuth(
        'POST',
        `/users/${userId}/timeline/posts`,
        post
    );
};