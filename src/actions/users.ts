import {ThunkAction} from "redux-thunk";
import axios, {AxiosResponse} from 'axios';
import {IGetUsersAction, IUsersState, SignUpSuccessAction, UsersActionTypes} from "../types/users";
import {ApiRequest} from "./api-tool";
import {RootState} from "../store";
import {Action} from "typesafe-actions";

export const getAllUsers = (): ThunkAction<Promise<any>, IUsersState, null, IGetUsersAction> => async dispatch => {
    try {
        const response = await axios.get("https://api.myjson.com/bins/h8ej6");
        dispatch<IGetUsersAction>({
            type: UsersActionTypes.GET_ALL,
            payload: response.data,
        });
    } catch (error) {
    }
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
        success: (response) => {
            dispatch({
                type: UsersActionTypes.SIGN_UP_SUCCESS,
                payload: response.data
            };
            dispatch(push('/'))
        },
        failure: () => {
            dispatch({
                type: UsersActionTypes.SIGN_UP_FAILURE,
                payload: {
                    errorMessage: 'Oooops',
                }
            })
        },
    });
};