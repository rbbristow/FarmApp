import React, { Component }  from 'react';
import './Stylesheet.css';
import Header from './components/Header';
import Main from './components/Main';
import Plots from './components/Plots';

function App() {
  return (
    <div className="body">
      <Header/>
      <Main/>
      <Plots/>
    </div>
  );
}

export default App;
