import {UiActionTypes} from "../types/ui";

export const changeLoaderState = (isEnabled: boolean) => {
    return {
        type: UiActionTypes.CHANGE_LOADER_STATE,
        isEnabled,
    };
};