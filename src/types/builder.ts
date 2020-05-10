export interface BuilderState {
    elementsToSave: BuilderItem[],
}

export type BuilderItem = {
    type: string,
    order: number,
    metadata: object,
};

export enum BuilderActionTypes {
    ADD_BUILDER_ITEM = 'ADD_BUILDER_ITEM',
    SET_BUILDER_ITEMS = 'SET_BUILDER_ITEMS'
}

export interface AddBuilderItem {
    type: BuilderActionTypes.ADD_BUILDER_ITEM,
    payload: BuilderItem
}

export interface SetBuilderItems {
    type: BuilderActionTypes.SET_BUILDER_ITEMS,
    payload: BuilderItem[],
}

export type BuilderActions = AddBuilderItem | SetBuilderItems;