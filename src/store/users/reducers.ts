import {GET_AVAILABLE_USERS, PersonActionTypes, UsersState} from "./types";

const initialState: UsersState = {
    users: []
};

export function usersReducer(
    state = initialState,
    action: PersonActionTypes
): UsersState {
    switch(action.type) {
        case GET_AVAILABLE_USERS:
            return {
                users: [...state.users]
            };
        default:
            return state;
    }
}