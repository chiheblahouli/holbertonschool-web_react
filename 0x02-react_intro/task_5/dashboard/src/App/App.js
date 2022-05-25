import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import './App.css';
import {getFullYear ,getFooterCopy} from '../utils/utils';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{
          position: "fixed",
          top: "15%",
          width: "100%",
          height: "30%",
        }}>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      
      <body className="App-body" style={{
            display: "inline-block",
            position: "absolute",
            top: "50%",
            left: "-2%",
          }}>
        <p style={{marginLeft:"50px"}}>Login to access the full dashboard</p>

        <form style={{marginLeft:"50px"}}>
            <label htmlFor="email" style={{margin:"5px"}}>Email</label>
            <input type="email" name="email" id="email" style={{margin:"5px"}}/>
            <label htmlFor="pwd" style={{margin:"5px"}}>Password</label>
            <input type="password" name="pwd" id="pwd" style={{margin:"5px"}}/>
            <button type="submit" style={{margin:"5px"}}>OK</button>
          </form>
      </body>
      
      <footer className="App-footer" style={{
            display: "inline-block",
            position: "absolute",
            top: "90%",
            width: "100%"
          }}>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
