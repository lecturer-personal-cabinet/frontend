import {ApiRequest} from "../actions/api-tool";

export const googleLogin = (tokenId: string) => {
    return ApiRequest.withAuth(
        'POST',
        `/login/google`,
        {
            tokenId
        }
    );
};