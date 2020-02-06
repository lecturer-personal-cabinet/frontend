export type User = {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    avatarSrc?: string,
}

export interface IUsersState {
    users: User[],
}

export enum UsersActionTypes {
    GET_ALL = 'GET_ALL'
}

export interface IGetUsersAction {
    type: UsersActionTypes.GET_ALL;
    payload: User[];
}
export type UserActions = IGetUsersAction;
