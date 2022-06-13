import React, { useState, useCallback } from 'react';
import Notes from './Notes';
import Counter from './Counter';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  const [notes, setNotes] = useState([]);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  const addNotes = useCallback(() => {
    setNotes([...notes, 'New blank note']);
  }, [notes]);

  return (
    <div className="app" style={{ display: 'flex' }}>
      <Notes notes={notes} addNotes={addNotes} />
      <Counter count={count} increment={increment} decrement={decrement} />
    </div>
  );
}
