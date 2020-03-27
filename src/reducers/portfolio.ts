import {PortfolioActions, PortfolioState} from "../types/portfolio";

const initialState: PortfolioState = {};

export function portfolioReducer(
    state = initialState,
    action: PortfolioActions
): PortfolioState {
    switch(action.type) {
        default:
            return state;
    }
}