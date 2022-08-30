import React from 'react';
import './App.css';

function App() {
  const post = '블로그';
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div className="black-nav">{ post }</div>
    </div>
  );
}

export default App;
