import {LoadingActions, LoadingsActionTypes, LoadingState} from "../types/loadings";

const initialState: LoadingState = {
    profile: true,
    timeline: true,
    usersList: true,
};

export function loadingReducer(
    state = initialState,
    action: LoadingActions
): LoadingState {
    switch(action.type) {
        case LoadingsActionTypes.TIMELINE:
            return {
                ...state,
                timeline: action.loading
            };
        case LoadingsActionTypes.USER_PROFILE:
            return {
                ...state,
                profile: action.loading
            };
        case LoadingsActionTypes.USERS_LIST:
            return {
                ...state,
                usersList: action.loading,
            };
        default:
            return state;
    }
}
