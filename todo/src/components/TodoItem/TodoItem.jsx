import React from 'react';

export default function TodoItem({item, onUpdate, onDelete}) {
    const {id, text, status} = item;
    const handleChange = (e) => {
        const status = e.target.checked ? 'completed' : 'active';
        onUpdate({...item, status});
    };
    const handleDelete = () => onDelete(item)

    return (
        <li>
            <input
                type="checkbox"
                id={id}
                checked={status === "completed"}
                onChange={handleChange}
            />
            <label htmlFor={id}>{text}</label>

            <button onClick={handleDelete}>삭제</button>
        </li>
    );
}