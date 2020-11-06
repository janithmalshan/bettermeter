import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from "./components/ui/Header";
import {ThemeDefault} from "./components/overrideMui/ThemeOverride";
import {ThemeProvider} from "@material-ui/core";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={ThemeDefault}>
            <BrowserRouter>
                <Header/>
                <App/>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
