/** @format */

import React from "react"
import { Router, Route, Switch } from "dva/router"
import SubRoutes from "./utils/SubRoutes"

const RoutersConfig = [
    {
        path: "/",
        component: () => import("./CMReaderPages/Scle/Scle"),
        model: [],
    },
]
function RouterConfig({ history, app }) {
    return (
        <Router history={history}>
            <Switch>
                {RoutersConfig.map((route, i) => (
                    <SubRoutes key={i} {...route} app={app} />
                ))}
            </Switch>
        </Router>
    )
}

export default RouterConfig
