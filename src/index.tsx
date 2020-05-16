import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import StudentApplication from './containers/StudentApplication';
import NotFound from "./containers/NotFound";
import {Provider} from 'react-redux'
import configureStore from "./store";
import SignInPage from './containers/SignInPage';
import SignUpPage from './containers/SignUpPage';
import ApplicationContainer from "./components/ApplicationContainer";
import { Router } from "react-router-dom";
import history from "./history";
import {WebSocketController} from "./actions/websocket";

const store = configureStore();
WebSocketController.dispatch = store.dispatch;

ReactDOM.render((
        <Provider store={store}>
            <ApplicationContainer>
                <Router history={history}>
                    <Switch>
                        <Route path='/sign-in' component={SignInPage}/>
                        <Route path='/sign-up' component={SignUpPage}/>
                        <Route path='/s' component={StudentApplication}/>
                        <Redirect from="/" to="/s"/>
                        <Route component={NotFound}/>
                    </Switch>
                </Router>
            </ApplicationContainer>
        </Provider>
    ), document.getElementById('root')
);
