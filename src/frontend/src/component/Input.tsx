import React, {useState, useRef, Ref} from 'react';

function InputSample() {
  const [text, setText] = useState('');
  const nameInput = useRef<HTMLInputElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText('');
    nameInput.current?.focus()
  };

  return (
      <div>
        <input onChange={onChange} value={text} ref={nameInput} />
        <button onClick={onReset}>초기화</button>
        <div>
          <b>값: {text}</b>
        </div>
      </div>
  );
}

export default InputSample;