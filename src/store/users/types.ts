export type User = {
    id: string,
    firstName: string,
    lastName: string,
    patronymic?: string,
    title?: string,
    avatarSrc?: string,
}

export interface UsersState {
    users: User[],
}

export const GET_AVAILABLE_USERS = 'GET_AVAILABLE_USERS';

interface GetAvailableUsersAction {
    type: typeof GET_AVAILABLE_USERS;
}

export type PersonActionTypes = GetAvailableUsersAction;