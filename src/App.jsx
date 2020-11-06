import './App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import MainWrapper from "./components/ui/MainWrapper";
import Dashboard from "./components/page/Dashboard";
import Analytics from "./components/page/Analytics";
import React from "react";

function App() {
    return (
        <MainWrapper>
            <Switch>
                {/* <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>*/}
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/analytics" component={Analytics}/>
            </Switch>
            <Router>
                <div>
                </div>
            </Router>
        </MainWrapper>
    );
}

export default App;
