import {ThunkAction} from "redux-thunk";
import axios from 'axios';
import {IGetUsersAction, IUsersState, UsersActionTypes} from "../types/users";
import {ApiRequest} from "./api-tool";
import {RootState} from "../store";
import {Action} from "typesafe-actions";
import {GoogleLoginResponse, GoogleLoginResponseOffline} from "react-google-login";

export const getAllUsers = (): ThunkAction<Promise<any>, IUsersState, null, IGetUsersAction> => async dispatch => {
    try {
        const response = await axios.get("https://api.myjson.com/bins/h8ej6");
        dispatch<IGetUsersAction>({
            type: UsersActionTypes.GET_ALL,
            payload: response.data,
        });
    } catch (error) {}
};

export const signUp = (firstName: string, lastName: string, email: string, password: string)
    : ThunkAction<void, RootState, null, Action<string>> => async dispatch => {
    await ApiRequest.postWithoutAuth({
        endpoint: '/signup',
        data: {
            identifier: email,
            password: password,
            email: email,
            firstName: firstName,
            lastName: lastName
        },
        success: (response) => {},
        failure: () => {},
    });
};

export const googleSuccessResponse = (response: GoogleLoginResponse | GoogleLoginResponseOffline)
    : ThunkAction<void, RootState, null, Action<string>> => async dispatch => {
    console.log(response);
};