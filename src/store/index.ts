import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {IUsersState} from "../types/users";
import {INotificationState} from "../types/notifications";
import {usersReducer} from "../reducers/users";
import {notificationsReducer} from "../reducers/notifications";
import {UiState} from "../types/ui";
import {uiReducer} from "../reducers/ui";
import {PortfolioState} from "../types/portfolio";
import {portfolioReducer} from "../reducers/portfolio";

export interface RootState {
    userState: IUsersState,
    notificationsState: INotificationState,
    uiState: UiState,
    portfolioState: PortfolioState,
}

const rootReducer = combineReducers<RootState>({
    userState: usersReducer,
    notificationsState: notificationsReducer,
    uiState: uiReducer,
    portfolioState: portfolioReducer,
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
