import {User} from "./users";

export interface PortfolioState {
    cards: PortfolioCard[],
}

export type PortfolioItem = {
    id: string,
    title: string,
    description: string,
    portfolioPhotos: string[],
    created: string,
    creator: User
};

export type PortfolioCard = {
    id?: string,
    title: string,
    description: string,
    previewImageLink: string,
    tags: string[],
    userId: string
};

export enum PortfolioActionTypes {
    SET_PORTFOLIO_CARDS = 'SET_PORTFOLIO_CARDS',
    ADD_PORTFOLIO_CARD = 'ADD_PORTFOLIO_CARD',
}

export interface AddPortfolioCard {
    type: PortfolioActionTypes.ADD_PORTFOLIO_CARD,
    payload: PortfolioCard
}

export interface SetPortfolioCards {
    type: PortfolioActionTypes.SET_PORTFOLIO_CARDS,
    payload: PortfolioCard[],
}

export type PortfolioActions = AddPortfolioCard | SetPortfolioCards;