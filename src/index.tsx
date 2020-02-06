import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import StudentApplication from './applications/StudentApplication';
import NotFound from "./containers/NotFound";
import {Provider} from 'react-redux'
import configureStore from "./store";
import {getAllUsers} from "./store/users/actions";
import SignInPage from './containers/SignInPage';
import SignUpPage from './containers/SignUpPage';
import ApplicationContainer from "./components/ApplicationContainer";

const store = configureStore();
store.dispatch(getAllUsers());

ReactDOM.render((
        <ApplicationContainer>
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path='/sign-in' component={SignInPage}/>
                        <Route path='/sign-up' component={SignUpPage}/>
                        <Route path='/s' component={StudentApplication}/>
                        <Redirect from="/" to="/s"/>
                        <Route component={NotFound}/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        </ApplicationContainer>
    ), document.getElementById('root')
);
