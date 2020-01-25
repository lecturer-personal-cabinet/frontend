import { createStore, combineReducers, applyMiddleware, Store } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {usersReducer} from './users/reducers';
import {IUsersState} from "./users/types";

export interface RootState {
    userState: IUsersState
}

const rootReducer = combineReducers<RootState>({
    userState: usersReducer,
});


export default function configureStore(): Store<RootState, any> {
    const middlewares = [thunkMiddleware];
    const middleWareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(
        rootReducer,
        composeWithDevTools(middleWareEnhancer)
    );

    return store;
}
