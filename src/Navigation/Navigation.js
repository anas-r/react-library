import React from "react";

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