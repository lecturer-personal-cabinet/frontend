import {ThunkAction} from "redux-thunk";
import {RootState} from "../store";
import {Action} from "typesafe-actions";
import {GoogleLoginResponse, GoogleLoginResponseOffline} from "react-google-login";
import {showError, showNotification} from "./notifications";
import {ApiRequest} from "./api-tool";
import {redirectToProfile, redirectToProfileComplete, redirectToSignIn} from "./redirects";
import {googleLogin} from "../controller/authentication_controller";
import {getUserProfile} from "../controller/users_controller";

export const onGoogleSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline)
    : ThunkAction<void, RootState, null, Action<string>> => async dispatch => {
    const errorText = 'Ошибка получения ответа от Google';
    try {
        if ((response as GoogleLoginResponse).profileObj) {
            const tokenId = (response as GoogleLoginResponse).tokenId;
            const result = await googleLogin(tokenId);
            localStorage.setItem('token', result.data['jwt']);
            localStorage.setItem('userId', result.data['userId']);
            try {
                await getUserProfile(result.data['userId']);
                redirectToProfile();
            } catch(e) {
                redirectToProfileComplete();
            }
        } else {
            dispatch(showError(errorText));
        }
    } catch(e) {
        dispatch(showError(errorText));
    }
};

export const logout = (): ThunkAction<void, RootState, null, Action<string>> => async dispatch => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    redirectToSignIn();
};

export const isAuthenticated = () => {
  return localStorage.getItem('userId') !== undefined && localStorage.getItem('token') != undefined;
};