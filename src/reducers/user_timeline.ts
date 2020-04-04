import {UserTimelineActions, UserTimelineItem, UserTimelineState, UserTimelineTypes} from "../types/user_timeline";

const initialState: UserTimelineState = {
    posts: [],
};

export function userTimelineReducer(
    state = initialState,
    action: UserTimelineActions
): UserTimelineState {
    switch(action.type) {
        case UserTimelineTypes.SAVE_ALL:
            return {
                ...state,
                posts: action.payload.reverse(),
            };
        case UserTimelineTypes.SAVE_TIMELINE_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload].reverse()
            };
        default:
            return state;
    }
}
