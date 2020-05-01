import {ThunkAction} from "redux-thunk";
import {RootState} from "../store";
import {Action} from "typesafe-actions";
import {PortfolioActionTypes, PortfolioCard} from "../types/portfolio";
import {showError} from "./notifications";
import {getPortfolioCards, savePortfolioCard} from "../controller/portfolio";
import {setPortfolioCardsLoading} from "./loadings";

export const savePortfolioCardAction = (card: PortfolioCard)
    : ThunkAction<void, RootState, null, Action<string>> => async dispatch => {
    try {
        const response = await savePortfolioCard(card);
        dispatch(addPortfolioCard(response.data));
    } catch(e) {
        dispatch(showError('Ошибка во время сохранения'));
        console.error(e);
    }
};

export const getPortfolioCardsAction = (userId: string): ThunkAction<void, RootState, null, Action<string>> => async dispatch => {
  try {
      const response = await getPortfolioCards(userId);
      dispatch(setPortfolioCards(response.data));
      dispatch(setPortfolioCardsLoading(false));
  } catch(e) {
      dispatch(showError('Что-то пошло не так ...'));
      console.error(e);
  }
};

export function addPortfolioCard(payload: PortfolioCard) {
    return {
        type: PortfolioActionTypes.ADD_PORTFOLIO_CARD,
        payload,
    }
}

export function setPortfolioCards(payload: PortfolioCard[]) {
    return {
        type: PortfolioActionTypes.SET_PORTFOLIO_CARDS,
        payload,
    }
}
