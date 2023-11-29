import React from 'react';
import { useState } from 'react'; // 리액트 패키지에서 useState 함수를 불러온다.

export default function Counter() {
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1)
    }
    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1)
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}