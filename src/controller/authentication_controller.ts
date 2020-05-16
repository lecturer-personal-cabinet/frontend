import {ApiRequest} from "../actions/api-tool";
import {User} from "../types/users";

export const googleLogin = (tokenId: string) => {
    return ApiRequest.withAuth(
        'POST',
        `/login/google`,
        {
            tokenId
        }
    );
};

export const signUp = (user: User) => {
    return ApiRequest.withoutAuth(
        'POST',
        `/sign-up`,
        {...user}
    );
};

export const signIn = (email: string, password: string) => {
  return ApiRequest.withoutAuth(
      'POST',
      '/sign-in',
      {
          email,
          password
      }
  )
};