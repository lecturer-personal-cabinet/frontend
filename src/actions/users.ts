import {ThunkAction} from "redux-thunk";
import {User, UsersActionTypes} from "../types/users";
import {ApiRequest} from "./api-tool";
import {RootState} from "../store";
import {Action} from "typesafe-actions";
import {changeLoaderState} from "./ui";

export const getAllUsers = (): ThunkAction<void, RootState, null, Action<string>> => async dispatch => {
    await ApiRequest.getWithAuth({
        endpoint: '/users',
        data: {},
        success: (response) => {
            dispatch(setUsers(response.data));
            dispatch(changeLoaderState(false));
        },
        failure: () => {
        }
    });
};

export function setUsers(users: User[]) {
    return {
        type: UsersActionTypes.GET_ALL,
        payload: users,
    }
}