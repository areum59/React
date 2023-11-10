import React from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useState } from 'react';
import { BsYoutube } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import { useEffect } from 'react';

export default function SearchHeader() {
    const { keyword } = useParams();
    const navigate = useNavigate();
    const [text, setText] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/videos/${text}`);  // videos 경로에 입력된 text 경로로 이동
    }

    useEffect(() => setText(keyword || ''), [keyword]);
    // 검색창 내용이 리디렉션 후에도 히스토리에 따라 동시에 변동될 수 있도록 함.

    return (
      <header>
        <Link to='/'>
            <BsYoutube />
            <h1>MyTube</h1>
        </Link>

        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    placeholder="검색"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <button><FiSearch /></button>
            </div>
        </form>
      </header>
    );
}