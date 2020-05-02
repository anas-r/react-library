import React from "react";
import './Book.css'
import * as fa from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function book(props) {
    let form;
    if (props.editable) {
        form = (
            <form className="book-info">
                Title
                <input type="text" className="book-title" value={props.title} onChange={props.handleTitle}/>
                Author
                <input type="text" className="book-author" value={props.author} onChange={props.handleAuthor}/>
                Description
                <input type="textarea" className="book-description" value={props.description} onChange={props.handleDescription}/>
            </form>
        )
    } else {
        form = (
            <form className="book-info">
                Title
                <input type="text" className="book-title" value={props.title} disabled/>
                Author
                <input type="text" className="book-author" value={props.author} disabled/>
                Description
                <input type="textarea" className="book-description" value={props.description} disabled/>
            </form>
        )
    }
        return (
        <section className={"book " + (props.isRead ? "book-read" : "")}>
            <header className="book-menu">
                <button onClick={props.edit}><FontAwesomeIcon icon={!(props.editable) ? fa.faEdit : fa.faSave} /></button>
                <button onClick={props.read}><FontAwesomeIcon icon={fa.faStar} /></button>
                <button onClick={props.delete}><FontAwesomeIcon icon={fa.faTrash} /></button>
            </header>
            {form}
        </section>
    )
}

export default book