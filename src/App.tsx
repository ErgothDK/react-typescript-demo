import React from 'react';
import './App.css';
import Todos from './components/Todos';
import Todo from './models/todo';

const DUMMY_TODOS = [
  new Todo("Learn C#"),
  new Todo("Learn JavaScript",1),
  new Todo("Learn React")
];

function App() {
  return (
    <div className="App">
      <Todos items={DUMMY_TODOS}></Todos>
    </div>
  );
}

export default App;
