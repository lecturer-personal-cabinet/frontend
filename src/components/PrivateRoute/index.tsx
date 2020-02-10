import React from 'react';
import {Route, Redirect} from 'react-router-dom';

// @ts-ignore
export const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        localStorage.getItem('token')
            ? <Component {...props} />
            : <Redirect to={{pathname: '/sign-in', state: {from: props.location}}}/>
    )}/>
);
