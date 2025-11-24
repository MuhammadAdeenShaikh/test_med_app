import React, { useState, useEffect } from 'react';

const StorageTest = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // Local Storage example
  useEffect(() => {
    const storedCount = localStorage.getItem('count');
    if (storedCount) {
      setCount(parseInt(storedCount));
    }

    const storedName = sessionStorage.getItem('name');
    if (storedName) {
      setName(storedName);
    }
  }, []);

  const incrementCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('count', newCount.toString());
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    sessionStorage.setItem('name', newName);
  };

  return (
    <div>
      <h2>Local Storage Example</h2>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>

      <h2>Session Storage Example</h2>
      <p>Name: {name}</p>
      <input type="text" value={name} onChange={handleNameChange} />
    </div>
  );
};

export default StorageTest;
