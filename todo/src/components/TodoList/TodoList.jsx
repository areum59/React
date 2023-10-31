import React, { useState } from 'react';
import { useEffect } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css'

export default function TodoList({filter}) {
    const [todos, setTodos] = useState(readTodosLocalStroage);

    const handleAdd = (todo) => setTodos([...todos, todo]);

    const handleUpdate = (updated) => 
        setTodos(todos.map((todo) => todo.id === updated.id ? updated : todo))
        
    const handleDelete = (deleted) => 
        setTodos(todos.filter((todo) => todo.id !== deleted.id));

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const filtered = getFilterItems(todos, filter);

    return (
      <section className={styles.container}>
        <ul className={styles.list}>
            {filtered.map(todo => (
                <TodoItem
                    key={todo.id}
                    item={todo}
                    onUpdate={handleUpdate}
                    onDelete={handleDelete}
                />
            ))}
        </ul>

        <AddTodo onAdd={handleAdd} />
      </section>
    );
}

function readTodosLocalStroage(){
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
}

function getFilterItems (todos, filter){
    if(filter === 'all'){
        return todos;
    }
    return todos.filter((todo) => todo.status === filter);
}