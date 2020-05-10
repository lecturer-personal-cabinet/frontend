import {ApiRequest} from "../actions/api-tool";
import {PortfolioCard, PortfolioItem} from "../types/portfolio";
import {BuilderItem} from "../types/builder";

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

export const getPortfolioItems = (portfolioId: string) => {
  return ApiRequest.withAuth(
      'GET',
      `/portfolio/${portfolioId}/items`,
      {}
  )
};

export const savePortfolioItems = (portfolioCardId: string, items: BuilderItem[]) => {
    const apiItems = items.map(item => {
        return {
            portfolioCard: {
                id: portfolioCardId,
            },
            type: item.type,
            order: item.order,
            metadata: JSON.stringify(item.metadata),
        };
    });

  return ApiRequest.withAuth(
      'POST',
      `/portfolio/items`,
      apiItems
  )
};