import {ThunkAction} from "redux-thunk";
import axios from 'axios';
import {IGetUsersAction, IUsersState, UsersActionTypes} from "./types";

export const getAllUsers = (): ThunkAction<Promise<any>, IUsersState, null, IGetUsersAction> => async dispatch => {
    try {
        const response = await axios.get("https://api.myjson.com/bins/h8ej6");
        dispatch<IGetUsersAction>({
            type: UsersActionTypes.GET_ALL,
            payload: response.data,
        });
    } catch (error) {
        console.error(error);
    }
};
