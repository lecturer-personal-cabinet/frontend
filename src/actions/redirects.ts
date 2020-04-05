export const redirectToProfile = () => window.location.href = '/s/profile';

export const redirectToPublicProfile = (userId: string) => window.location.href = `/s/profile/${userId}`;

export const redirectToSignIn = () => window.location.href = '/sign-in';

export const redirectToProfileComplete = () => window.location.href = '/s/profile/complete';