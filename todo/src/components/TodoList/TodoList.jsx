import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';

export default function TodoList() {
    // Todos의 기본 값
    const [todos, setTodos] = useState([
        {id: '123', text: '장보기', status: 'active'},
        {id: '456', text: '공부하기', status: 'active'}
    ]);

    // 새로 추가되는 todo를 받아서 todos에 업데이트
    const handleAdd = (todo) => setTodos([...todos, todo]);

    return (
        <section>
            <ul>
                {todos.map((item) => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>

            <AddTodo onAdd={handleAdd} />
            {/* Callback함수를 통하여 onAdd={}를 props로 전달, handleAdd를 호출 */}
        </section>
    );
}