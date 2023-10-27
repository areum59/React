import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import TodoItem from '../TodoItem/TodoItem';

export default function TodoList({filter}) {
    const [todos, setTodos] = useState([
        {id: '123', text: '리스트1', status: 'active'},
        {id: '456', text: '리스트2', status: 'active'}
    ]);
    const handleAdd = (todo) => setTodos([...todos, todo]);

    const handleUpdate = (updated) => 
        setTodos(todos.map((todo) => todo.id === updated.id ? updated : todo))
        
    const handleDelete = (deleted) => 
        setTodos(todos.filter((todo) => todo.id !== deleted.id));

    const filtered = getFilterItems(todos, filter);

    return (
      <section>
        <ul>
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

function getFilterItems (todos, filter){
    if(filter === 'all'){
        return todos;
    }
    return todos.filter((todo) => todo.status === filter);
}