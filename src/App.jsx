import React from "react";
import Inicio from "./component/Inicio";
import {
    BrowserRouter as Router, Redirect, Route, Switch
} from 'react-router-dom';
import PantallaPrincipal from "./component/PantallaPrincipal";

export function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Inicio}/>
                <Route path='/home' component={PantallaPrincipal}/>

            </Switch>
        </Router>

    );
}  