import {UserTimelineActions, UserTimelineState, UserTimelineTypes} from "../types/user_timeline";

const initialState: UserTimelineState = {
    ownPosts: [],
    ownTimelineLoading: true,
};

export function userTimelineReducer(
    state = initialState,
    action: UserTimelineActions
): UserTimelineState {
    switch(action.type) {
        case UserTimelineTypes.GET_ALL:
            return {
                ...state,
                ownPosts: action.payload,
            };
        case UserTimelineTypes.TIMELINE_LOADING:
            return {
                ...state,
                ownTimelineLoading: action.loading,
            };
        default:
            return state;
    }
}
