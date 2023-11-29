import React from 'react';
import { useState } from 'react';

export default function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    const {name, nickname} = inputs;  // 비구조화 할당을 통해 값 추출

    const handleChange = (e) => {
        const {value, name} = e.target; // 우선 e.target에서 name 과 value 를 추출
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    };

    const handleReset = () => {
        setInputs({
            name: '',
            nickname: ''
        });
    };

    return (
      <div>
        <input
            type="text"
            name="name"
            placeholder="이름"
            value={name}
            onChange={handleChange}
        />
        <input
            type="text"
            name="nickname"
            placeholder="닉네임"
            value={nickname}
            onChange={handleChange}
        />
        <button onClick={handleReset}>초기화</button>

        <div>
            <p>값 : {name} ({nickname})</p>
        </div>
      </div>
    );
}