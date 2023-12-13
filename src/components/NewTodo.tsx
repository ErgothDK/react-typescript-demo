import React, {useRef} from 'react'

const NewTodo:React.FC<{
    onAdd: (todoText: string) => void,
}> = (props) => {
    const txtTodoRef= useRef<HTMLInputElement>(null);

    const submitHandler =(event: React.FormEvent) => {
        event.preventDefault();
        const newTodo = txtTodoRef.current!.value;

        if(newTodo.trim().length === 0)
            return;

        props.onAdd(newTodo);
    }
  return (
    <form onSubmit={submitHandler}>
        <label htmlFor="txtTodo">Todo Task</label>
        <input type="text" id="txtTodo" ref={txtTodoRef}/>
        <button>Add Todo</button>
    </form>
  )
}

export default NewTodo