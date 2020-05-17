import {ThunkAction} from "redux-thunk";
import {RootState} from "../store";
import {Action} from "typesafe-actions";
import {GoogleLoginResponse, GoogleLoginResponseOffline} from "react-google-login";
import {showError, showNotification} from "./notifications";
import {redirectToProfile, redirectToProfileComplete, redirectToSignIn} from "./redirects";
import {googleLogin, signIn, signUp} from "../controller/authentication_controller";
import {getUserProfile} from "../controller/users_controller";
import {User} from "../types/users";
import jwt_decode from "jwt-decode";
import {setIsAuthenticated} from "./users";

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
                console.log('GET USR PROFILE???');
                redirectToProfile();
            } catch(e) {
                console.log('REDIRECT');
                redirectToProfileComplete();
            }
        } else {
            dispatch(showError(errorText));
        }
    } catch(e) {
        dispatch(showError(errorText));
    }
};

export const createAccount = (user: User): ThunkAction<void, RootState, null, Action<string>> => async dispatch => {
    try {
        await signUp(user);
        dispatch(showNotification("Аккаунт успешно создан"));
        redirectToSignIn();
    } catch(e) {
        if(e.response && e.response.status == 409) {
            dispatch(showError('Пользователь с таким email уже существует'));
        } else {
            dispatch(showError('Ошибка создания аккаунт. Повторите позже.'));
        }
        console.error(e);
    }
};

export const signInAction = (email: string, password: string): ThunkAction<void, RootState, null, Action<string>> => async dispatch => {
  try {
      const result = await signIn(email, password);
      localStorage.setItem('token', result.data['jwtToken']);
      localStorage.setItem('userId', result.data['userId']);
      dispatch(setIsAuthenticated(true));
      try {
          await getUserProfile(result.data['userId']);
          redirectToProfile();
      } catch(e) {
          redirectToProfileComplete();
      }
  } catch(e) {
      dispatch(showError('Ошибка аутентификации'));
  }
};

export const logout = (): ThunkAction<void, RootState, null, Action<string>> => async dispatch => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    dispatch(setIsAuthenticated(false));
    redirectToSignIn();
};

export const isAuthenticated = () => {
  return localStorage.getItem('userId') !== undefined && localStorage.getItem('token') !== undefined;
};

export const getUserId = () => {
    console.trace();
    // @ts-ignore
    return getDecodedProfile().data.userId;
};

export const getUserRole = () => {
    // @ts-ignore
    return getDecodedProfile().data.role;
};

export const getToken = () => localStorage.getItem('token');

const getDecodedProfile = () => {
    try {
        const token = localStorage.getItem('token');
        return jwt_decode(token!);
    } catch(e) {
        console.error(e);
        return null;
    }
};