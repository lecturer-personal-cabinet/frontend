import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import StudentApplication from './containers/StudentApplication';
import NotFound from "./containers/NotFound";
import {Provider} from 'react-redux'
import configureStore from "./store";
import SignInPage from './containers/SignInPage';
import SignUpPage from './containers/SignUpPage';
import ApplicationContainer from "./components/ApplicationContainer";
import {getAllUsers} from "./actions/users";
import {PrivateRoute} from "./components/PrivateRoute";

const store = configureStore();
store.dispatch(getAllUsers());

ReactDOM.render((
        <Provider store={store}>
            <ApplicationContainer>
                <BrowserRouter>
                    <Switch>
                        <Route path='/sign-in' component={SignInPage}/>
                        <Route path='/sign-up' component={SignUpPage}/>
                        <PrivateRoute path='/s' component={StudentApplication}/>
                        <Redirect from="/" to="/s"/>
                        <Route component={NotFound}/>
                    </Switch>
                </BrowserRouter>
            </ApplicationContainer>
        </Provider>
    ), document.getElementById('root')
);
