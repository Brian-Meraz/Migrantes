import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Navigation from './components/Navigation';
import Home from './components/home';

function App() {
  return (
    <Router>
      <Navigation/>
      <Route path='/' component={Home} />
      
    </Router>
  );
}

export default App;
