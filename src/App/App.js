import React from 'react';
import Library from "../components/Library/Library";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import ls from 'local-storage'
import './App.css';
import Signature from "./Signature";


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
                <Navigation showUnread={this.showUnreadHandler.bind(this)} marker={this.state.showUnread}/>
                <Library save={this.saveLibraryInApp.bind(this)} initialState={{...this.saved}} showUnread={this.state.showUnread}/>
                <Footer />
                <Signature />
            </div>
        );
    }
}

export default App;

