import * as React from "react";
import './Header.css'

import * as fa from "@fortawesome/free-solid-svg-icons";
import * as fab from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Header(props) {
    return (
        <header className="app-header">
            <h1>
                <FontAwesomeIcon icon={fab.faReact} size='2x'/>
                <span>Library Manager</span>
            </h1>
            <button onClick={props.saved}><FontAwesomeIcon icon={fa.faSave} size='3x' /></button>
        </header>
    )
}

export default Header