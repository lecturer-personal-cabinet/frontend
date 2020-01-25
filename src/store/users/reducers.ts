import {IUsersState, UserActions, UsersActionTypes} from "./types";

const initialState: IUsersState = {
    users: []
};

export function usersReducer(
    state = initialState,
    action: UserActions
): IUsersState {
    switch(action.type) {
        case UsersActionTypes.GET_ALL:
            return {
                ...state,
                users: action.payload,
            };
        default:
            return state;
    }
}