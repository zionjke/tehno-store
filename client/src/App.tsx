import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./components/AppRouter";
import {NavBar} from "./components/NavBar";
import {CircularProgress, CssBaseline} from '@material-ui/core';
import {useDispatch, useSelector} from "react-redux";
import { RootState } from './store/store';
import {initializeApp} from "./store/reducers/app-reducer";

function App() {
    const isInitialized = useSelector<RootState,boolean>(state => state.app.isInitialized)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeApp())
    },[])

    if(!isInitialized) {
        return (
            <div className='circularProgress'>
                <CircularProgress/>
            </div>
        )
    }

    return (
        <BrowserRouter>
            <CssBaseline />
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
