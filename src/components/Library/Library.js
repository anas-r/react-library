import React from "react";
import Book from "../Book/Book";
import './Library.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";

class Library extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.initialState;
    }

    saveLibrary() {
    this.props.save(this.state);
    }

    incrementId() {
        let idCounter = this.state.idCounter;
        this.setState({idCounter: ++idCounter});
        return idCounter;
    }

    editHandler(i,event) {
        const books = this.state.books.slice();
        const bookIndex = books.findIndex((b) => (b.id === i));
        const book = {
            ...books[bookIndex],
            isEditable: !books[bookIndex].isEditable
        };

        books.splice(bookIndex, 1, book);
        this.setState({books: books});
    }

    readHandler(i) {
        const books = this.state.books.slice();
        const bookIndex = books.findIndex((b) => (b.id === i));
        const book = {
            ...books[bookIndex],
            isRead: !books[bookIndex].isRead
        };
        books.splice(bookIndex, 1, book);
        this.setState({books: books});
    }

    deleteHandler(i) {
        const books = this.state.books.slice();
        const book = books.filter((b) => (b.id !== i));
        this.setState({books: book}, () => console.log(this.state.idCounter));
    }

    handleChange(i,property,event) {
        const books = this.state.books.slice();
        const bookIndex = books.findIndex((b) => (b.id === i));
        const book = {
            ...books[bookIndex],
        };
        book[property] = event.target.value;
        event.preventDefault();
        books.splice(bookIndex, 1, book);
        this.setState({books: books});
    }

    renderReadBooks() {
        return this.state.books.filter(book => book.isRead).map(book => {
            return (
                <Book key={book.id}
                      id = {book.id}
                      edit={this.editHandler.bind(this, book.id)}
                      read={this.readHandler.bind(this, book.id)}
                      delete={this.deleteHandler.bind(this, book.id)}
                      isRead={book.isRead}
                      editable={book.isEditable}

                      handleTitle={this.handleChange.bind(this,book.id,"title")}
                      handleAuthor={this.handleChange.bind(this,book.id,"author")}
                      handleDescription={this.handleChange.bind(this,book.id,"description")}

                      title={book.title}
                      author={book.author}
                      description={book.description}
                />
            )
        })
    }

    renderAllBooks() {
        return this.state.books.map(book => {
            return (
                <Book key={book.id}
                      id = {book.id}
                      edit={this.editHandler.bind(this, book.id)}
                      read={this.readHandler.bind(this, book.id)}
                      delete={this.deleteHandler.bind(this, book.id)}
                      isRead={book.isRead}
                      editable={book.isEditable}

                      handleTitle={this.handleChange.bind(this,book.id,"title")}
                      handleAuthor={this.handleChange.bind(this,book.id,"author")}
                      handleDescription={this.handleChange.bind(this,book.id,"description")}

                      title={book.title}
                      author={book.author}
                      description={book.description}
                />
            )
        }).concat([<div className="button-wrapper" key="btn">
            <button onClick={this.addBookHandler.bind(this)}><FontAwesomeIcon icon={fa.faPlus} size="2x" /></button>
        </div>])
    }

    addBookHandler() {
        const currId = this.incrementId();
        const {id, title, author, description, isRead,isEditable} = {
            id: currId,
            title: "New title",
            author: "Author",
            description: "Description",
            isRead: false,
            isEditable: false
        };
        this.setState({
            books: [...this.state.books].concat([{
                id,
                title,
                author,
                description,
                isRead,
                isEditable
            }])
        })
    }

    renderBooks() {
        if (this.props.showUnread) {
            return this.renderAllBooks();
        } else {
            return this.renderReadBooks();
        }
    }

    render() {
        this.saveLibrary();
        return (
            <div className="library">
                {this.renderBooks()}
            </div>
        )
    }
}

export default Library