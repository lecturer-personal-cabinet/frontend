import {GET_AVAILABLE_USERS, PersonActionTypes} from "./types";

export function getAvailableUsers(): PersonActionTypes {
    return {
        type: GET_AVAILABLE_USERS,
    }
}