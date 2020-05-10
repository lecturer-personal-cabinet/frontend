import {BuilderActionTypes, BuilderItem} from "../types/builder";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../store";
import {Action} from "typesafe-actions";
import {getPortfolioItems, savePortfolioItems} from "../controller/portfolio";
import {setBuilderItems} from "./loadings";

export const getAllBuilderItems = (portfolioId: string)
    : ThunkAction<void, RootState, null, Action<string>> => async dispatch => {
    try {
        const result = await getPortfolioItems(portfolioId);
        // @ts-ignore
        const data = result.data.map(item => {
            return {
                type: item.type,
                order: item.order,
                metadata: JSON.parse(item.metadata),
            };
        });
        dispatch(setBuilderItemsAction(data));
        dispatch(setBuilderItems(false));
    } catch (e) {
        console.error(e);
    }
};

export const saveAllBuilderItems = (portfolioId: string, items: BuilderItem[])
    : ThunkAction<void, RootState, null, Action<string>> => async dispatch => {
    try {
        const result = await savePortfolioItems(portfolioId, items);
        // @ts-ignore
        const data = result.data.map(item => {
            return {
                type: item.type,
                order: item.order,
                metadata: JSON.parse(item.metadata),
            };
        });
        dispatch(setBuilderItemsAction(data));
        dispatch(setBuilderItems(false));
    } catch(e) {
        console.error(e);
    }
};

export function addBuilderItem(payload: BuilderItem) {
    return {
        type: BuilderActionTypes.ADD_BUILDER_ITEM,
        payload,
    }
}

export function setBuilderItemsAction(payload: BuilderItem[]) {
    return {
        type: BuilderActionTypes.SET_BUILDER_ITEMS,
        payload,
    }
}