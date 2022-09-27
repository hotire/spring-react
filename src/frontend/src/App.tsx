import React from 'react';
import Greetings from "./component/Greetings";
import GreetingsNotFC from "./component/GreetingsNotFC";
import logo from './logo.svg';
import './App.css';
import Input from "./component/Input";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
      <Greetings name="hotire" onClick={
        (name: String) => {
          console.log(`onClick : ${name}`)
        }
      }></Greetings>
      <GreetingsNotFC name="hotire"></GreetingsNotFC>
      <Input></Input>
    </div>
  );
}

export default App;
