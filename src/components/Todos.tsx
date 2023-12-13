import React from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';
import styles from './Todos.module.css';

const Todos: React.FC<{
    items: Todo[],
    onRemoveTodo: (id: number) => void
}> = (props) => {
  return (
    <ul className={styles.todos}>
        {props.items.map(todo => <TodoItem key={todo.id} todo={todo} onRemoveTodo={props.onRemoveTodo.bind(null,todo.id)} />)}
    </ul>
  )
}

export default Todos