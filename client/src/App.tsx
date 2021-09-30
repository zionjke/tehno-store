import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./components/AppRouter";
import {NavBar} from "./components/NavBar";
import { CssBaseline } from '@material-ui/core';

function App() {
    return (
        <BrowserRouter>
            <CssBaseline />
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
