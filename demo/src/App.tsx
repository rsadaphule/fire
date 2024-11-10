import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let var1: [string, number] = ["Hello", 124] 
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The variable {var1} is of the type {typeof(var1)} data type.
        </p>
       
      </header>
    </div>
  );
}

export default App;
