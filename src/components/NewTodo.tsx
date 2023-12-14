import React, {useRef, useContext} from 'react'
import styles from './NewTodo.module.css';
import { TodosContext } from '../store/todos-context';

const NewTodo:React.FC = () => {
    const todoCtx = useContext(TodosContext);
    const txtTodoRef= useRef<HTMLInputElement>(null);

    const submitHandler =(event: React.FormEvent) => {
        event.preventDefault();
        const newTodo = txtTodoRef.current!.value;

        if(newTodo.trim().length === 0)
            return;

            todoCtx.addTodo(newTodo);
    }
  return (
    <form onSubmit={submitHandler} className={styles.form}>
        <label htmlFor="txtTodo">Todo Task</label>
        <input type="text" id="txtTodo" ref={txtTodoRef}/>
        <button>Add Todo</button>
    </form>
  )
}

export default NewTodo