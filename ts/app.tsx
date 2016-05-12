import * as React from "react"
import {Component} from "react"
import {Navbar} from "./navbar"

import {UserStore} from "Launchpad/public/js/userstore"

export class App extends Component<void, void> {
    
    render() {
        return (
            <main>
                <h3>User: {UserStore.user}</h3>
                <Navbar/>
                {this.props.children}
            </main>
        );
    }
}