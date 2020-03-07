export interface UiState {
    isLoaderEnabled: boolean,
}

export enum UiActionTypes {
    CHANGE_LOADER_STATE = 'CHANGE_LOADER_STATE',
}

export interface ChangeLoaderStateAction {
    type: UiActionTypes.CHANGE_LOADER_STATE;
    isEnabled: boolean;
}

export type UiActions = ChangeLoaderStateAction;