import React, { Component } from 'react';
import logo from '../favicon.png'

export const Header = () => {
        return (
            <header>
                    <div>
                            <ul className="nav-links">
                                <li><img className="app-Logo" src={logo} className="App-logo" alt="logo" />                            </li>
                                <li className="title">The Farm App</li>
                            </ul>                       
                    </div>
            </header>
        )
    }
 
export default Header ;

