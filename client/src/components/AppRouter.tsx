import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/consts";
import {useSelector} from "react-redux";
import { RootState } from '../store/store';

type Props = {};
export const AppRouter = (props: Props) => {
    const isAuth = useSelector<RootState,boolean>(state => state.user.isAuth)
    return (
        <Switch>
            {
                isAuth && authRoutes.map(({path, Component}) => <Route key={path} path={path} component={Component}
                                                                       exact/>)
            }
            {
                publicRoutes.map(({path, Component}) => <Route key={path} path={path} component={Component} exact/>)
            }
            <Redirect to={SHOP_ROUTE}/>
        </Switch>
    );
};