import {LoadingsActionTypes} from "../types/loadings";

export function setProfileLoading(loading: boolean) {
    return {
        type: LoadingsActionTypes.USER_PROFILE,
        loading,
    }
}

export function setProfileInfoLoading(loading: boolean) {
    return {
        type: LoadingsActionTypes.PROFILE_INFO,
        loading,
    }
}

export function setTimelineLoading(loading: boolean) {
    return {
        type: LoadingsActionTypes.TIMELINE,
        loading,
    }
}

export function setUsersListLoading(loading: boolean) {
    return {
        type: LoadingsActionTypes.USERS_LIST,
        loading,
    }
}

export function setTimezonesLoading(loading: boolean) {
    return {
        type: LoadingsActionTypes.TIMEZONES,
        loading,
    }
}