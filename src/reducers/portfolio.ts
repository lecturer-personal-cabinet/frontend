import {PortfolioActions, PortfolioActionTypes, PortfolioState} from "../types/portfolio";

const initialState: PortfolioState = {
    cards: [],
};

export function portfolioReducer(
    state = initialState,
    action: PortfolioActions
): PortfolioState {
    switch(action.type) {
        case PortfolioActionTypes.SET_PORTFOLIO_CARDS:
            return {...state, cards: action.payload};
        case PortfolioActionTypes.ADD_PORTFOLIO_CARD:
            return {...state, cards: [...state.cards, action.payload]};
        default:
            return state;
    }
}