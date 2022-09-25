import React from 'react';

type GreetingsProps = {
  name: string;
  optional?: string;
  onClick: (name: string) => void; // 아무것도 리턴하지 않는다는 함수를 의미합니다.
};

const Greetings: React.FC<GreetingsProps> = ({ name, optional, onClick }) => (
    <div>
      Hello, {name}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={ () => onClick(name) }>Click Me</button>
      </div>
    </div>
);


export default Greetings;