import {LoadingActions, LoadingsActionTypes, LoadingState} from "../types/loadings";

const initialState: LoadingState = {
    profile: true,
    profileInfo: true,
    timeline: true,
    usersList: true,
    timezones: true,
    dialogs: true,
    dialog: true,
    portfolioCards: true,
    builderItems: true,
};

export function loadingReducer(
    state = initialState,
    action: LoadingActions
): LoadingState {
    switch (action.type) {
        case LoadingsActionTypes.TIMELINE:
            return {...state, timeline: action.loading};
        case LoadingsActionTypes.USER_PROFILE:
            return {...state, profile: action.loading};
        case LoadingsActionTypes.USERS_LIST:
            return {...state, usersList: action.loading};
        case LoadingsActionTypes.PROFILE_INFO:
            return {...state, profileInfo: action.loading};
        case LoadingsActionTypes.TIMEZONES:
            return {...state, timezones: action.loading};
        case LoadingsActionTypes.DIALOGS:
            return {...state, dialogs: action.loading};
        case LoadingsActionTypes.DIALOG:
            return {...state, dialog: action.loading};
        case LoadingsActionTypes.PORTFOLIO_CARDS:
            return {...state, portfolioCards: action.loading};
        case LoadingsActionTypes.BUILDER_ITEMS:
            return {...state, builderItems: action.loading};
        default:
            return state;
    }
}
