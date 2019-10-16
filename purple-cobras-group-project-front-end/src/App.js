import React from 'react';
import './App.css';
import './components/front-end.css'
import {FrontEnd} from './components/front-end.js'

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <header className="header">
          Calculate a Comparable House Price in Des Moines
        </header>
        <FrontEnd/>
      </div>
    </div>
  );
}

export default App;
