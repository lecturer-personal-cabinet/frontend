import {ThunkDispatch} from "redux-thunk";

export type User = {
    id?: string,
    firstName: string,
    lastName: string,
    email: string,
    avatarSrc?: string,
    image?: string,
    patronymic?: string,
    password?: string,
}

export type UserInfo = {
    id?: string,
    description: string,
    timezone: string,
    address: string,
    phoneNumber: string,
}

export interface IUsersState {
    users: User[],
    signUp: {
        failure: {
            isFailure: boolean,
            errorMessage: string,
        }
    },
    profile?: User,
    profileInfo?: UserInfo,
    authenticated: boolean,
}

export enum UsersActionTypes {
    GET_ALL = 'GET_ALL',
    SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
    SIGN_UP_FAILURE = 'SIGN_UP_FAILURE',
    SET_PROFILE = 'SET_PROFILE',
    SET_PROFILE_INFO = 'SET_PROFILE_INFO',
    IS_AUTHENTICATED = 'IS_AUTHENTICATED',
}

export interface IGetUsersAction {
    type: UsersActionTypes.GET_ALL;
    payload: User[];
}

export interface SetProfileAction {
    type: UsersActionTypes.SET_PROFILE,
    payload: User,
}

export interface SignUpSuccessAction {
    type: UsersActionTypes.SIGN_UP_SUCCESS;
    payload: {
        token: string,
        expiresOn: string,
    }
}

export interface SignUpFailureAction {
    type: UsersActionTypes.SIGN_UP_FAILURE;
    payload: {
        errorMessage: string
    }
}

export interface SetProfileInfoAction {
    type: UsersActionTypes.SET_PROFILE_INFO,
    payload: UserInfo,
}

export interface SetIsAuthenticated {
    type: UsersActionTypes.IS_AUTHENTICATED,
    payload: boolean,
}

export type UserActions =
    IGetUsersAction |
    SignUpSuccessAction |
    SignUpFailureAction |
    SetProfileAction |
    SetProfileInfoAction |
    SetIsAuthenticated;
