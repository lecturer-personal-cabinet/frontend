import {UiActions, UiActionTypes, UiState} from "../types/ui";

const initialState: UiState = {
    isLoaderEnabled: false,
};

export function uiReducer(
    state = initialState,
    action: UiActions
): UiState {
    console.log(JSON.stringify(action));
    switch(action.type) {
        case UiActionTypes.CHANGE_LOADER_STATE:
            return {
                ...state,
                isLoaderEnabled: action.isEnabled,
            };
        default:
            return state;
    }
}