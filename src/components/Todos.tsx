import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import styles from './Todos.module.css';
import { TodosContext } from '../store/todos-context';

const Todos: React.FC = () => {
    const todosCtx = useContext(TodosContext);

  return (
    <ul className={styles.todos}>
        {todosCtx.items.map(todo => <TodoItem key={todo.id} todo={todo} onRemoveTodo={todosCtx.removeTodo.bind(null,todo.id)} />)}
    </ul>
  )
}

export default Todos