import React from 'react';
import './App.css';
import {Router, Link} from '@reach/router'
import AllProducts from './components/AllProducts';
import OneProduct from './components/OneProduct';


function App() {
  return (
    <div className="App">
      <Router>
      <AllProducts path="/" />
      <OneProduct path="/product/:id" />
      </Router>
    </div>
  );
}

export default App;
