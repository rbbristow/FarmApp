import React, { Component } from 'react';
import logo from '../favicon.png'

export const Header = () => {
        return (
            <header className="header">
                    <div className="container">
                        <nav>
                            <ul className="nav-links">
                                <li><img className="App-Logo" src={logo} className="App-logo" alt="logo" />                            </li>
                                <li className="title">The Farm App</li>
                            </ul>  
                        </nav>                      
                    </div>
            </header>
        )
    }
 
export default Header ;

