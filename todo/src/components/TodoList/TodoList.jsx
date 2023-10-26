import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import TodoItem from '../TodoItem/TodoItem';

export default function TodoList() {
    const [todos, setTodos] = useState([
        {id: '123', text: '리스트1', status: 'active'},
        {id: '456', text: '리스트2', status: 'active'}
    ]);
    const handleAdd = (todo) => setTodos([...todos, todo]);

    const handleUpdate = (updated) => 
        setTodos(todos.map((todo) => todo.id === updated.id ? updated : todo))
        
    const handleDelete = (deleted) => 
        setTodos(todos.filter((todo) => todo.id !== deleted.id));

    return (
      <section>
        <ul>
            {todos.map(todo => (
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