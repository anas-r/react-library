import React from "react";
import './Navigation.css'

function Navigation(props) {
    return (
        <nav className="app-navigation">
            <ul>
                <li onClick={props.showUnread}>All books</li>
                <li onClick={props.showUnread}>Read books</li>
            </ul>
        </nav>
    )
}

export default Navigation