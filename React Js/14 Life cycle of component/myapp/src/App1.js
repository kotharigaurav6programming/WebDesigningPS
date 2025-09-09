import React, { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // Runs once on mount
  useEffect(() => {
    console.log('Component mounted!');
  }, []);

  // Runs on every count change
  useEffect(() => {
    console.log(`Count changed to: ${count}`);
  }, [count]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      console.log('Component will unmount');
    };
  }, []);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
export default App;