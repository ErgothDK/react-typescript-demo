import React, {useState} from 'react';
import './App.css';
import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';



function App() {
  const [todosList, setTodosList] = useState<Todo[]>([
    new Todo("Learn C#"),
    new Todo("Learn JavaScript",1),
    new Todo("Learn React")
  ]);

  const newTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodosList((prevTodos) => prevTodos.concat(newTodo));
  };

  const removeTodoHandler = (id: number) => {
      setTodosList((prevTodos) => prevTodos.filter(todo => todo.id !== id));
  }

  return (
    
    <div>
      <NewTodo onAdd={newTodoHandler} />
      <Todos items={todosList} onRemoveTodo={removeTodoHandler}></Todos>
    </div>
  );
}

export default App;
