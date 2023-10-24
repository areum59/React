import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTodo.module.css'

export default function AddTodo({onAdd}) {
    const [text, setText] = useState('');
    const handleChange = (e) => setText(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();  // 화면이 리프레쉬 되는 것을 방지
        if (text.trim().length === 0) {
            return;
        }  // text의 앞, 뒤 공백 제거 후 length가 0이라면 값을 반환하지 않고 넘어간다.
        onAdd({id: uuidv4(), text, status: 'active'});
        setText('');  // 텍스트를 추가한 후 input 초기화
    }

    return (
      <form className={styles.form} onSubmit={onSubmit}>
        <input 
          className={styles.input}
          type="text"
          placeholder="할 일을 추가하세요"
          value={text}
          onChange={handleChange}
        />
        <button className={styles.button}>Add</button>
      </form>
    );
}

