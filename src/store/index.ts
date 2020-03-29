import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {IUsersState} from "../types/users";
import {INotificationState} from "../types/notifications";
import {usersReducer} from "../reducers/users";
import {notificationsReducer} from "../reducers/notifications";
import {PortfolioState} from "../types/portfolio";
import {portfolioReducer} from "../reducers/portfolio";
import {UserTimelineState} from "../types/user_timeline";
import {userTimelineReducer} from "../reducers/user_timeline";
import {LoadingState} from "../types/loadings";
import {loadingReducer} from "../reducers/loadings";

export interface RootState {
    userState: IUsersState,
    notificationsState: INotificationState,
    portfolioState: PortfolioState,
    userTimelineState: UserTimelineState,
    loadingState: LoadingState,
}

const rootReducer = combineReducers<RootState>({
    userState: usersReducer,
    notificationsState: notificationsReducer,
    portfolioState: portfolioReducer,
    userTimelineState: userTimelineReducer,
    loadingState: loadingReducer,
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
