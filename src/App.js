import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {

  console.log("process.env:", process.env)
  console.log(process.env.REACT_APP_TEST_ENV)
  console.log(process.env.OTHER_TEST_ENV)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          With a purposeful grimace, and a terrible sound.
        </p>
      </header>
    </div>
  );
}

export default App;
