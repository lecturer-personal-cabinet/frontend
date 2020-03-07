import React from 'react';
import {Redirect, Route} from 'react-router-dom';

// @ts-ignore
export const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        // TODO (vladimir): Dev
        true || localStorage.getItem('token')
            ? <Component {...props} />
            : <Redirect to={{pathname: '/sign-in', state: {from: props.location}}}/>
    )}/>
);
