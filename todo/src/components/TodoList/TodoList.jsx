import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';

export default function TodoList() {
    const [todos, setTodos] = useState([
        {id: '123', text: '리스트1', status: 'active'},
        {id: '456', text: '리스트2', status: 'active'}
    ]);
    const handleAdd = (todo) => setTodos([...todos, todo]);

    return (
      <section>
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>

        <AddTodo onAdd={handleAdd} />
      </section>
    );
}