import {IUsersState, UserActions, UsersActionTypes} from "../types/users";

const initialState: IUsersState = {
    users: [],
    signUp: {
        failure: {
            isFailure: false,
            errorMessage: '',
        }
    }
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
        case UsersActionTypes.SET_PROFILE:
            return {
                ...state,
                profile: action.payload,
            };
        case UsersActionTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                signUp: {
                    ...state.signUp,
                    failure: {
                        ...state.signUp.failure,
                        isFailure: false
                    },
                }
            };
        case UsersActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                signUp: {
                    ...state.signUp,
                    failure: {
                        ...state.signUp.failure,
                        isFailure: true,
                        errorMessage: action.payload.errorMessage,
                    }
                }
            };
        default:
            return state;
    }
}