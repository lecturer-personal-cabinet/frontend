export interface LoadingState {
    profile: boolean,
    profileInfo: boolean,
    timeline: boolean,
    usersList: boolean,
    timezones: boolean,
}

export enum LoadingsActionTypes {
    USER_PROFILE = 'USER_PROFILE',
    TIMELINE = 'TIMELINE',
    USERS_LIST = 'USERS_LIST',
    PROFILE_INFO = 'PROFILE_INFO',
    TIMEZONES = 'TIMEZONES',
}

export interface UserProfileLoadingAction {
    type: LoadingsActionTypes.USER_PROFILE,
    loading: boolean
}

export interface UserProfileInfoLoadingAction {
    type: LoadingsActionTypes.PROFILE_INFO,
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

export interface TimezonesLoadingAction {
    type: LoadingsActionTypes.TIMEZONES,
    loading: boolean,
}

export type LoadingActions =
    UserProfileLoadingAction |
    UserProfileInfoLoadingAction |
    TimelineLoadingAction |
    UsersListLoadingAction |
    TimezonesLoadingAction;