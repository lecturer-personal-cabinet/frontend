import {CommonActionsTypes} from "../types/common";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../store";
import {Action} from "typesafe-actions";
import {ApiRequest} from "./api-tool";
import {setTimezonesLoading} from "./loadings";

export const getTimezones = (): ThunkAction<void, RootState, null, Action<string>> => async dispatch => {
    await ApiRequest.getWithAuth({
        endpoint: '/timezones/available',
        data: {},
        success: (response) => {
            dispatch(setTimezones(response.data));
            dispatch(setTimezonesLoading(false));
        },
        failure: (error: any) => {
            dispatch(setTimezones([]));
            dispatch(setTimezonesLoading(false));
        }
    });
};

function setTimezones(timezones: string[]) {
    return {
        type: CommonActionsTypes.SET_TIMEZONES,
        payload: timezones,
    }
}