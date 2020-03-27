import {UserTimelineActions, UserTimelineState} from "../types/user_timeline";

const initialState: UserTimelineState = {};

export function userTimelineReducer(
    state = initialState,
    action: UserTimelineActions
): UserTimelineState {
    switch(action.type) {
        default:
            return state;
    }
}
