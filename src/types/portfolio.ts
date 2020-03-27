export interface PortfolioState {

}

export type PortfolioItem = {
    id: string,
    title: string,
    description: string,
    portfolioPhotos: string[],
};

export enum PortfolioActionTypes {
    DUMMY = 'DUMMY',
}

export interface DummyAction {
    type: PortfolioActionTypes.DUMMY
}

export type PortfolioActions = DummyAction;