import React from "react";
import './Navigation.css'

function Navigation(props) {
    return (
        <nav className="app-navigation">
            <ul>
                <li onClick={props.showUnread} className={props.marker ? "app-navigation-selected" : ""}>All books</li>
                <li onClick={props.showUnread} className={!(props.marker) ? "app-navigation-selected" : ""}>Read books</li>
            </ul>
        </nav>
    )
}

export default Navigation