import React, { useState } from 'react';
import './App.css';
import { useSelector, useStore } from 'react-redux';

function App() {
  const store = useStore();
  const ss = store.getState()
  return (
    <div className="App">
      {/* <div className='value'>{counter}</div> */}
      <button>Increment</button>
      <button>Decrement</button>
      <button>Reset</button>
    </div>
  );
}

export default App;
