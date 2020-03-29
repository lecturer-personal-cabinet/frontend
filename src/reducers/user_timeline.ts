import {UserTimelineActions, UserTimelineState, UserTimelineTypes} from "../types/user_timeline";

const initialState: UserTimelineState = {
    ownPosts: [],
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
        default:
            return state;
    }
}
