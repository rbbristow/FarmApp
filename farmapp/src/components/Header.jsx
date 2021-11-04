import React, { Component } from 'react';
import logo from '../favicon.png'

class Header extends React.Component {
    render() { 
        return <div className="Header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="Title">The Farm App</h1>
        </div>
        ;
    }
}
 
export default Header ;

