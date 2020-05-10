import history from "../history";

export const redirectToProfile = () => history.push('/s/profile');

export const redirectToPublicProfile = (userId: string) => history.push(`/s/profile/${userId}`);

export const redirectToSignIn = () => history.push('/sign-in');

export const redirectToProfileComplete = () => history.push('/s/profile/complete');

export const redirectToDialogs = () => history.push('/s/dialogs');

export const redirectToMessages = (dialogId: string) => history.push(`/s/dialogs/${dialogId}`);

export const redirectToUserPortfolio = (userId: string) => history.push(`/s/portfolio/${userId}`);

export const redirectToUserPortfolioItem = (id: string) => history.push(`/s/portfolio/${id}/display`);

export const redirectToUserPortfolioItemBuilder = (id: string) => history.push(`/s/portfolio/${id}/builder`);