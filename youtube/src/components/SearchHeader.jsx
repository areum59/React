import React, { useEffect, useState } from 'react';
import { BsYoutube } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function SearchHeader() {
    const [text, setText] = useState('');
    const navigate = useNavigate();
    const { keyword } = useParams();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/videos/${text}`)
    }

    useEffect(() => setText(keyword || ''), [keyword]);

    return (
      <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
        <Link to="/" className="flex items-center">
          <BsYoutube className="text-4xl text-brand mr-1" />
          <h1 className="text-2x font-semibold">MyTube</h1>
        </Link>

        <form className="w-full flex justify-center" onSubmit={handleSubmit}>
            <div className="w-5/12 flex items-center rounded-full overflow-hidden border-solid border-1 border-zinc-600">
                <input
                    className="flex-1 h-full text-sm py-2 px-6 outline-none bg-black text-gray-50"
                    type="text"
                    value={text}
                    placeholder="Search..."
                    onChange={e => setText(e.target.value)}
                />
                <button className="h-full border-l border-zinc-600 bg-zink-600 px-8">
                    <FiSearch />
                </button>
            </div>
        </form>
      </header>
    );
}