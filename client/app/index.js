import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import {BrowserRouter, Route} from 'react-router-dom';
import LoginForm from './components/Auth/Login';

const App = () => {
    return (
        <Header />
    );
}

ReactDOM.render(
    <BrowserRouter>
        <App />
        <Route path="/" component={LoginForm} /> 
    </BrowserRouter>
    , document.getElementById("app"));