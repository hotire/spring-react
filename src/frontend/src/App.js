import React, { useState } from 'react';
import './App.css';

function App() {
  const post = '블로그';
  const [titles, setTitles] = useState('초밥', '파스타', '탕수육');
  const [like, setLike] = useState(0);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div className="black-nav">{ post }</div>
      <div className="list">
        <h4>
          { titles[0] }
          <span onClick={() => { setLike(like + 1); }}>👍</span>
        </h4>
        <p>8월 30일</p>
      </div>
      <button onClick={() => {
        const copy = [...titles];
        copy[0] = '오마카세';
        setTitles(copy);
      }}
      >
        수정
      </button>
    </div>
  );
}

export default App;
