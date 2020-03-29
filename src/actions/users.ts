import {ThunkAction} from "redux-thunk";
import {User, UsersActionTypes} from "../types/users";
import {ApiRequest} from "./api-tool";
import {RootState} from "../store";
import {Action} from "typesafe-actions";
import {changeLoaderState} from "./ui";
import {showError} from "./notifications";
import {redirectToProfile} from "./redirects";

export const getAllUsers = (): ThunkAction<void, RootState, null, Action<string>> => async dispatch => {
    await ApiRequest.getWithAuth({
        endpoint: '/users',
        data: {},
        success: (response) => {
            dispatch(setUsers(response.data));
            dispatch(changeLoaderState(false));
        },
        failure: () => {
            dispatch(showError('Что-то пошло не по плану ...'))
        }
    });
};

export const getProfile = (userId: string): ThunkAction<void, RootState, null, Action<string>> => async dispatch => {
    await ApiRequest.getWithAuth({
        endpoint: `/users/${userId}`,
        data: {},
        success: (response) => {
            dispatch(setProfile(response.data));
            dispatch(setProfileLoading(false));
        },
        failure: () => {
            redirectToProfile();
        }
    });
};

export function setUsers(users: User[]) {
    return {
        type: UsersActionTypes.GET_ALL,
        payload: users,
    }
}

export function setProfile(profile: User) {
    return {
        type: UsersActionTypes.SET_PROFILE,
        payload: profile,
    }
}

export function setProfileLoading(loading: boolean) {
    return {
        type: UsersActionTypes.SET_PROFILE_LOADING,
        loading,
    }
}