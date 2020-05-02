import * as React from "react";
import './Header.css'

function Header(props) {
    return (
        <header className="app-header">
            <h1>Library Manager</h1>
            <button onClick={props.saved}>Save</button>
        </header>
    )
}

export default Header