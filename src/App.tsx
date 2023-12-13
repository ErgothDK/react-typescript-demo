import React from 'react';
import './App.css';
import Todos from './components/Todos';

const DUMMY_TODOS = ["Learn C#", "Learn JavaScript", "Learn React"];

function App() {
  return (
    <div className="App">
      <Todos items={DUMMY_TODOS}></Todos>
    </div>
  );
}

export default App;
