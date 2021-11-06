import React, { Component } from 'react';
import Plot from './components/Plot';

class Main extends React.Component {
    render() { 
        return <div className="main">
            Welcome to your farm!
            <Plot/>
        </div>;
    }
}
 
export default Main ;

