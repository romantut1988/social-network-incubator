import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogsProps} from "./components/Dialogs/Dialogs";
import {ProfilePropsType} from "./components/Profile/Profile";

export type AppType = {
    state: {
        messagesPage: DialogsProps
        profilePage: ProfilePropsType
    }
}

const App = (props: AppType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <Dialogs {...props.state.messagesPage}/> }/>
                    <Route path="/profile" render={() => <Profile {...props.state.profilePage}/> } />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
