import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {IUsersState} from "../types/users";
import {INotificationState} from "../types/notifications";
import {usersReducer} from "../reducers/users";
import {notificationsReducer} from "../reducers/notifications";

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
