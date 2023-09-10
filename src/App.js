import React from 'react';
import './App.css';

// import {Browse, Explore, Footer, Header, Navbar, Products, Share} from './components';
import { Navbar, Header } from './components';
// import {About, Shop} from './containers';

const App = () => {
  return (
    <div className="App">    
      <Navbar/>
      <Header/>
    </div>
  );
}

export default App;
