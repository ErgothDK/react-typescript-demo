import React from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';
import styles from './Todos.module.css';

const Todos: React.FC<{
    items: Todo[],
}> = (props) => {
  return (
    <ul className={styles.todos}>
        {props.items.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </ul>
  )
}

export default Todos