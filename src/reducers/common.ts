import {CommonActions, CommonActionsTypes, CommonState, RequestStatus} from "../types/common";

const initialState: CommonState = {
    timezones: [],
    save: {
        success: RequestStatus.PENDING,
    }
};

export function commonReducer(
    state = initialState,
    action: CommonActions
): CommonState {
    switch(action.type) {
        case CommonActionsTypes.SET_TIMEZONES:
            return {
                ...state,
                timezones: action.payload
            };
        case CommonActionsTypes.SET_SAVE_STATUS:
            return {
                ...state,
                save: {
                    ...state.save,
                    success: action.success,
                    message: action.message
                }
            };
        default:
            return state;
    }
};