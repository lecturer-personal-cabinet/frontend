export interface LoadingState {
    profile: boolean,
    profileInfo: boolean,
    timeline: boolean,
    usersList: boolean,
    timezones: boolean,
    dialogs: boolean,
    dialog: boolean,
    portfolioCards: boolean,
    builderItems: boolean,
}

export enum LoadingsActionTypes {
    USER_PROFILE = 'USER_PROFILE',
    TIMELINE = 'TIMELINE',
    USERS_LIST = 'USERS_LIST',
    PROFILE_INFO = 'PROFILE_INFO',
    TIMEZONES = 'TIMEZONES',
    DIALOGS = 'DIALOGS',
    DIALOG = 'DIALOG',
    PORTFOLIO_CARDS = 'PORTFOLIO_CARDS',
    BUILDER_ITEMS = 'BUILDER_ITEMS',
}

export interface UserProfileLoadingAction {
    type: LoadingsActionTypes.USER_PROFILE,
    loading: boolean
}

export interface UserProfileInfoLoadingAction {
    type: LoadingsActionTypes.PROFILE_INFO,
    loading: boolean
}

export interface TimelineLoadingAction {
    type: LoadingsActionTypes.TIMELINE,
    loading: boolean,
}

export interface UsersListLoadingAction {
    type: LoadingsActionTypes.USERS_LIST,
    loading: boolean,
}

export interface TimezonesLoadingAction {
    type: LoadingsActionTypes.TIMEZONES,
    loading: boolean,
}

export interface DialogsLoadingAction {
    type: LoadingsActionTypes.DIALOGS,
    loading: boolean,
}

export interface DialogLoadingAction {
    type: LoadingsActionTypes.DIALOG,
    loading: boolean,
}

export interface PortfolioCardsLoadingAction {
    type: LoadingsActionTypes.PORTFOLIO_CARDS,
    loading: boolean,
}

export interface BuilderItemsAction {
    type: LoadingsActionTypes.BUILDER_ITEMS,
    loading: boolean,
}

export type LoadingActions =
    UserProfileLoadingAction |
    UserProfileInfoLoadingAction |
    TimelineLoadingAction |
    UsersListLoadingAction |
    TimezonesLoadingAction |
    DialogsLoadingAction |
    DialogLoadingAction |
    PortfolioCardsLoadingAction |
    BuilderItemsAction;