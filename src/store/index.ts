import { createStore, combineReducers, applyMiddleware, Store } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {usersReducer} from './users/reducers';
import {IUsersState} from "./users/types";
import {INotificationState} from "./notifications/types";
import {notificationsReducer} from "./notifications/reducers";

export interface RootState {
    userState: IUsersState,
    notificationsState: INotificationState,
}

const rootReducer = combineReducers<RootState>({
    userState: usersReducer,
    notificationsState: notificationsReducer,
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
