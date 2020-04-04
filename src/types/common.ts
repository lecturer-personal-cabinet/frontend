export interface CommonState {
    timezones: string[],
    save: {
        success: RequestStatus,
        message?: string
    },
};

export enum RequestStatus {
    PENDING = 'PENDING',
    SUCCESS = 'SUCCESS',
    FAILURE = 'FAILURE',
};

export enum CommonActionsTypes {
    SET_TIMEZONES = 'SET_TIMEZONES',
    SET_SAVE_STATUS = 'SET_SAVE_STATUS',
}

export interface SetTimezonesAction {
    type: CommonActionsTypes.SET_TIMEZONES,
    payload: string[]
}

export interface SetSaveStatus {
    type: CommonActionsTypes.SET_SAVE_STATUS,
    success: RequestStatus,
    message: string,
}

export type CommonActions = SetTimezonesAction | SetSaveStatus;