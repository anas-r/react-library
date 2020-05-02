import React from 'react';
import './App.css';
import Library from "./Library/Library";
import Header from "./Header/Header";
import ls from 'local-storage'
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showUnread: true}
        this.saved = JSON.parse((ls.get("savedLibrary")) ? ls.get("savedLibrary") : "{\"idCounter\":0,\"books\":[]}");
    }

    saveLibraryInApp(libraryState) {
        this.saved = {...libraryState};
    }

    saveLibraryInLocalStorage() {
        ls.set("savedLibrary",JSON.stringify(this.saved));
    }

    showUnreadHandler(event) {
        const bool = (event.target.textContent === "All books");
        this.setState({showUnread: bool});
    }

    render() {
        return (
            <div className="App">
                <Header saved={this.saveLibraryInLocalStorage.bind(this)}/>
                <Navigation showUnread={this.showUnreadHandler.bind(this)}/>
                <Library save={this.saveLibraryInApp.bind(this)} initialState={{...this.saved}} showUnread={this.state.showUnread}/>
                <Footer />
            </div>
        );
    }
}

export default App;

