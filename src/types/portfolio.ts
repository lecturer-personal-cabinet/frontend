import {User} from "./users";

export interface PortfolioState {

}

export type PortfolioItem = {
    id: string,
    title: string,
    description: string,
    portfolioPhotos: string[],
    created: string,
    creator: User
};

export enum PortfolioActionTypes {
    DUMMY = 'DUMMY',
}

export interface DummyAction {
    type: PortfolioActionTypes.DUMMY
}

export type PortfolioActions = DummyAction;