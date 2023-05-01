import logo from './logo.svg';
import './App.css';
import './Title.css';
import { useState } from 'react';
import Title from './Title.js';
import Menu from './Menu.js';

function App() {
  return (
    <div className="App">
      <Title />
      <Menu />
      <header className="App-header">
        <h1>My webpage!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
