import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
/*import About from './Components/About';
import Skill from './Components/Skill'; */


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Nav />
  <Home />
  </>
  
);