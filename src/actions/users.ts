import {ThunkAction} from "redux-thunk";
import {User, UserInfo, UsersActionTypes} from "../types/users";
import {ApiRequest} from "./api-tool";
import {RootState} from "../store";
import {Action} from "typesafe-actions";
import {showError, showNotification} from "./notifications";
import {setProfileInfoLoading, setProfileLoading, setUsersListLoading} from "./loadings";
import {getUser, getUserProfile, saveUserInfo, updateUser} from "../controller/users_controller";
import {redirectToProfile} from "./redirects";

export const getAllUsers = (search?: string): ThunkAction<void, RootState, null, Action<string>> => async dispatch => {
    await ApiRequest.getWithAuth({
        endpoint: '/users?search=' + (search || ''),
        data: {},
        success: (response) => {
            dispatch(setUsers(response.data));
            dispatch(setUsersListLoading(false));
        },
        failure: (error: any) => {
            dispatch(showError('Что-то пошло не по плану ...'))
        }
    });
};

export const getProfile = (userId: string): ThunkAction<void, RootState, null, Action<string>> => async dispatch => {
    try {
        const response = await getUser(userId);
        dispatch(setProfile(response.data));
        dispatch(setProfileLoading(false));
    } catch (e) {}
};

export const getProfileInfo = (userId: string): ThunkAction<void, RootState, null, Action<string>> => async dispatch => {
    try {
        const response = await getUserProfile(userId);
        dispatch(setProfileInfo(response.data));
        dispatch(setProfileInfoLoading(false));
    } catch (e) {
        dispatch(setProfileInfoLoading(false));
    }
};

export const saveProfileAndProfileInfo = (info: UserInfo, profile: User)
    : ThunkAction<void, RootState, null, Action<string>> => async dispatch => {
    try {
        await updateUser(profile);
        await saveUserInfo(profile.id || '', info);
        dispatch(showNotification('Данные успешно сохранены'));
        redirectToProfile();
    } catch (e) {
        dispatch(showError('Что-то пошло не так'));
    }

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


export function setProfileInfo(profileInfo: UserInfo) {
    return {
        type: UsersActionTypes.SET_PROFILE_INFO,
        payload: profileInfo
    }
}
