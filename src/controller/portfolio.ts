import {ApiRequest} from "../actions/api-tool";
import {PortfolioCard} from "../types/portfolio";

export const savePortfolioCard = (portfolioCard: PortfolioCard) => {
    return ApiRequest.withAuth(
        'POST',
        `/portfolio/card`,
        portfolioCard
    );
};

export const getPortfolioCards = (userId: string) => {
    return ApiRequest.withAuth(
        'GET',
        `/users/${userId}/portfolio/card`,
        {}
    );
};