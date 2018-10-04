import React from 'react';
import { Route, Redirect } from 'react-router-dom';

//Redireciona para página de login caso rota não esteja autorizada
export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)