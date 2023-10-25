import React, { useState } from 'react';
import { useEffect } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

export default function TodoList({filter}) {
    // Todos의 기본 값
    const [todos, setTodos] = useState(() => readTodosFromLocalStroage());

    // 새로 추가되는 todo를 받아서 todos에 업데이트
    const handleAdd = (todo) => setTodos([...todos, todo]);

    // 업데이트 하고자 하는 todo를 기존의 아이템을 유지하면서 새로운 배열을 업데이트
    const handleUpdate = (updated) => 
        setTodos(todos.map((t) => t.id === updated.id ? updated : t));
    useEffect(() => {
        console.log('readTodosFromLocalStroage');
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    // 삭제하고자 하는 ID가 기존 todo의 ID가 아닌것을 filter하여 업데이트
    const handleDelete = (deleted) => 
        setTodos(todos.filter((t) => t.id !== deleted.id));

    const filtered = getFilteredItems(todos, filter);

    return (
      <section className={styles.container}>
        <ul className={styles.list}>
            {filtered.map(item => (
                <Todo
                    key={item.id}
                    todo={item}
                    onUpdate={handleUpdate}
                    onDelete={handleDelete}
                />
            ))}
        </ul>

        <AddTodo onAdd={handleAdd} />
        {/* Callback함수를 통하여 onAdd={}를 props로 전달, handleAdd를 호출 */}
      </section>
    );

}

function readTodosFromLocalStroage(){
    const todos = localStorage.getItem('todos')
    return todos ? JSON.parse(todos) : []
}

function getFilteredItems(todos, filter){
    if (filter === 'all') {
        return todos
    }
    return todos.filter((todo) => todo.status === filter);
}