import * as React from "react"
import {Component} from "react"
import {Link} from "react-router"
import {LaunchpadLink} from "Launchpad/public/js/launchpadlink"

export class Navbar extends Component<void, void> {
    
    render() {
        return (
            <section>
                <LaunchpadLink app="/" path="hash">Home</LaunchpadLink>
                <Link to="/app1">App1</Link>
                <Link to="/app2">App2</Link>
            </section>
        );
    }
}