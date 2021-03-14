import React, { useState, useEffect } from 'react'

const Counter = (props) => {
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState('quys');

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <p> {userName} You clicked {count} times</p>

      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

    </div>
  );
}

export default Counter
