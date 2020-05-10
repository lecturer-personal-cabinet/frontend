import {BuilderActions, BuilderActionTypes, BuilderState} from "../types/builder";

const initialState: BuilderState = {
    elementsToSave: []
};

export function builderStateReducer(
    state = initialState,
    action: BuilderActions
): BuilderState {
    switch(action.type) {
        case BuilderActionTypes.ADD_BUILDER_ITEM:
            return {...state, elementsToSave: [...state.elementsToSave, action.payload]};
        case BuilderActionTypes.SET_BUILDER_ITEMS:
            return {...state, elementsToSave: action.payload};
        default: return state;
    }
}