import {User, UserInfo} from "../types/users";
import {ApiRequest} from "../actions/api-tool";

export const updateUser = (user: User) => {
    return ApiRequest.withAuth(
        'PUT',
        `/users/${user.id}`,
        {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        }
    );
};

export const saveUserInfo = (userId: string, userInfo: UserInfo) => {
    return ApiRequest.withAuth(
        'POST',
        `/users/${userId}/profile`,
        {
            'description': userInfo.description,
            'timezone': userInfo.timezone,
            'address': userInfo.address,
            'phoneNumber': userInfo.phoneNumber,
        }
    );
};

export const getUserProfile = (userId: string) => {
    return ApiRequest.withAuth(
        'GET',
        `/users/${userId}/profile`,
        {}
    );
};