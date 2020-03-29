import {ThunkAction} from "redux-thunk";
import {RootState} from "../store";
import {Action} from "typesafe-actions";
import {GoogleLoginResponse, GoogleLoginResponseOffline} from "react-google-login";
import {showError, showNotification} from "./notifications";
import {ApiRequest} from "./api-tool";
import {redirectToProfile} from "./redirects";

export const onGoogleSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline)
    : ThunkAction<void, RootState, null, Action<string>> => async dispatch => {
    if((response as GoogleLoginResponse).profileObj) {
        const tokenId = (response as GoogleLoginResponse).tokenId;
        await ApiRequest.postWithoutAuth({
            endpoint: '/login/google',
            data: {
                tokenId,
            },
            success: (response) => {
                localStorage.setItem('token', response.data['jwt']);
                localStorage.setItem('userId', response.data['userId']);
                redirectToProfile();
                dispatch(showNotification('Добро пожаловать'));
            },
            failure: () => {
                dispatch(showError('Произошла ошибка во время аутентификации. Попробуйте позже.'));
            }
        });
    } else {
        dispatch(showError('Ошибка получения ответа от Google'));
    }
};
