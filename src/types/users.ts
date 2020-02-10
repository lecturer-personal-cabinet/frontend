export type User = {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    avatarSrc?: string,
}

export interface IUsersState {
    users: User[],
    signUp: {
        failure: {
            isFailure: boolean,
            errorMessage: string,
        }
    }
}

export enum UsersActionTypes {
    GET_ALL = 'GET_ALL',
    SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
    SIGN_UP_FAILURE = 'SIGN_UP_FAILURE',
}

export interface IGetUsersAction {
    type: UsersActionTypes.GET_ALL;
    payload: User[];
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

export type UserActions = IGetUsersAction | SignUpSuccessAction | SignUpFailureAction;
