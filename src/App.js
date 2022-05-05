import React from "react";

import Navbar from "./commons/Navbar";
import Topbar from "./commons/Topbar";
import TrelloBoardsTable from "./kanban/TrelloBoardsTable";
import Home from "./Home";
import {Switch, Route} from "react-router-dom";
import TrelloBoard from "./kanban/TrelloBoard";
import Board from "./kanban/Board";
import Footer from "./commons/Footer";
import Okr from "./kanban/Okr";

class App extends React.Component {
    state = {};

    render() {
        return (
            <div id="wrapper">
                <Navbar></Navbar>
                <div id="page-wrapper" className="gray-bg">
                    <Topbar></Topbar>
                    <Switch>
                        <Route path="/okr" component={Okr}></Route>
                        <Route path="/board/:boardId" component={Board}></Route>
                        <Route path="/trello/:boardId" component={TrelloBoard}></Route>
                        <Route path="/trello">
                            <TrelloBoardsTable></TrelloBoardsTable>
                        </Route>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                    </Switch>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;
