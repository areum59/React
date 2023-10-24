import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

export default function TodoList() {
    // Todos의 기본 값
    const [todos, setTodos] = useState([
        {id: '123', text: '장보기', status: 'active'},
        {id: '456', text: '공부하기', status: 'active'}
    ]);
    // 새로 추가되는 todo를 받아서 todos에 업데이트
    const handleAdd = (todo) => setTodos([...todos, todo]);
    // 업데이트 하고자 하는 todo를 기존의 아이템을 유지하면서 새로운 배열을 업데이트
    const handleUpdate = (updated) => 
        setTodos(todos.map((t) => t.id === updated.id ? updated : t));
    // 삭제하고자 하는 ID가 기존 todo의 ID가 아닌것을 filter하여 업데이트
    const handleDelete = (deleted) => 
        setTodos(todos.filter((t) => t.id !== deleted.id));

    return (
      <section>
        <ul>
            {todos.map(item => (
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