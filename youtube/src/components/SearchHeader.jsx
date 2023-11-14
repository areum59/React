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
      <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4'>
        <Link to='/' className='flex items-center'>
            <BsYoutube className='text-4xl text-brand mr-1' />
            <h1 className='text-2x font-semibold'>MyTube</h1>
        </Link>

        <form className='w-full flex justify-center' onSubmit={handleSubmit}>
            <div className='w-5/12 flex items-center rounded-full overflow-hidden border-solid border-1 border-zinc-600'>
                <input
                    className='flex-1 h-full text-sm py-2 px-6 outline-none bg-black text-gray-50'
                    type="text"
                    placeholder="Search..."
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <button className='h-full border-l border-zinc-600 bg-zink-600 px-8'>
                    <FiSearch />
                </button>
            </div>
        </form>
      </header>
    );
}