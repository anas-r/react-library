import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as fab from "@fortawesome/free-brands-svg-icons"
import React from "react";

function Signature() {
    const styleMain={
        background: "#4A5568",
        position: "fixed",
        bottom: "0",
        margin: "0 -80px",
        width: "100%",
        height: "50px",
        display:"flex",
        justifyContent: "space-around",
        color:"white"
    }

    const styleGithub = {
        margin: "auto 5px auto 10px",
        color: "white",
        cursor: 'pointer'
    }

    const styleGithubIcon = {
        color: "white",
        cursor: 'pointer'
    }

    const styleTxt = {
        margin: "auto 0 auto auto"
    }

    const styleLinkedIn = {
        margin: "auto auto auto 0",
        color: "white",
        cursor: 'pointer'
    }

    const styleLinkedInIcon = {
        color: "white",
        cursor: 'pointer'
    }


    return (
        <div className="github"
             style={styleMain}>
            <div className="text" style={styleTxt}>Part of my
                The ODIN
                Project portfolio.
            </div>
            <a href="https://github.com/anas-r/react-library"
               style={styleGithub}>
                <FontAwesomeIcon icon={fab.faGithub} size='2x' style={styleGithubIcon}/>
            </a>
            &nbsp;
            <a href="https://www.linkedin.com/in/s-s-s-s/"
               style={styleLinkedIn}>
                <FontAwesomeIcon icon={fab.faLinkedin} size='2x' style={styleLinkedInIcon}/>
            </a>
        </div>
    )
}

export default Signature