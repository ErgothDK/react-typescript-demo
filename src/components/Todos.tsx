import React from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';

const Todos: React.FC<{
    items: Todo[],
}> = (props) => {
  return (
    <ul>
        {props.items.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </ul>
  )
}

export default Todos