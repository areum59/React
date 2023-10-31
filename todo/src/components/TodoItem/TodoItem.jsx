import React from 'react';
import styles from './TodoItem.module.css'
import { FaMinus } from 'react-icons/fa6'

export default function TodoItem({item, onUpdate, onDelete}) {
    const {id, text, status} = item;
    const handleChange = (e) => {
        const status = e.target.checked ? 'completed' : 'active';
        onUpdate({...item, status});
    };
    const handleDelete = () => onDelete(item)

    return (
        <li className={styles.todo}>
            <input
                className={styles.checkbox}
                type="checkbox"
                id={id}
                checked={status === "completed"}
                onChange={handleChange}
            />
            <label htmlFor={id} className={styles.text}>
                {text}
            </label>

            <button className={styles.button} onClick={handleDelete}>
                <FaMinus />
            </button>
        </li>
    );
}