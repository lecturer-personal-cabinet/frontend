export interface LoadingState {
    profile: boolean,
    timeline: boolean,
    usersList: boolean,
}

export enum LoadingsActionTypes {
    USER_PROFILE = 'USER_PROFILE',
    TIMELINE = 'TIMELINE',
    USERS_LIST = 'USERS_LIST',
}

export interface UserProfileLoadingAction {
    type: LoadingsActionTypes.USER_PROFILE,
    loading: boolean
}

export interface TimelineLoadingAction {
    type: LoadingsActionTypes.TIMELINE,
    loading: boolean,
}

export interface UsersListLoadingAction {
    type: LoadingsActionTypes.USERS_LIST,
    loading: boolean,
}

export type LoadingActions = UserProfileLoadingAction | TimelineLoadingAction | UsersListLoadingAction;