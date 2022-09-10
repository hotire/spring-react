import React, { useState } from 'react';
import './App.css';

function App() {
  const post = '블로그';
  const [titles, setTitles] = useState('초밥', '파스타', '탕수육');

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div className="black-nav">{ post }</div>
      <div className="list">
        <h4>{ titles[0] }</h4>
        <p>8월 30일</p>
      </div>
    </div>
  );
}

export default App;
