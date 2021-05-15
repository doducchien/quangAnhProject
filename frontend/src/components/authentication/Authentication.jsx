import React, { lazy, useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

import bk from '../../assets/img/logobk.png'

import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    Redirect
} from "react-router-dom";

const Login = lazy(() => import('./Login'))
const Signup = lazy(() => import('./Signup'))

function Authentication() {

    const match = useRouteMatch()

    return (
        <BrowserRouter >
            <div className="authentication">

                <img src={bk} />

                <Switch>
                    <Route path={`${match.path}/login`}>
                        <Login />
                    </Route>
                    <Route path={`${match.path}/signup`}>
                        <Signup />
                    </Route>
                </Switch>
            </div>

        </BrowserRouter>
    )
}

export default Authentication