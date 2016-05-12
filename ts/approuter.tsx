import * as React from "react"
import {Component} from "react"
import {Router, Route} from "react-router"
import {createHashHistory as createHistory, useBasename} from "history"

import {App} from "./app"

const history = useBasename(createHistory)({
  basename: "/",
  queryKey: false
})

export class AppRouter extends Component<void, void> {
    
    getComponent(location, cb) {
        cb(null, () => <h2>Dynmic component for path {location.params.component}</h2>);
    }
    
    render() {
        return (
            <Router history={history}>
                <Route component={App}>
                    <Route path="/" component={() => <h3>App1 Home</h3>} />
                    <Route path="/:component" getComponent={this.getComponent.bind(this)} />
                </Route>
            </Router>
        );
    }
}