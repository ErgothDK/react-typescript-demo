import React, { useState } from 'react'
import Todo from '../models/todo';

type TodosContextObj = {
    items: Todo[],
    addTodo: (text: string) => void,
    removeTodo: (id: number) => void,
};

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: number) => {},
});



const TodosContextProvider: React.FC = (props) => {

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
    
      const contextValue: TodosContextObj = {
        items: todosList,
        addTodo: newTodoHandler,
        removeTodo: removeTodoHandler
      }
      
    return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
}

export default TodosContextProvider;