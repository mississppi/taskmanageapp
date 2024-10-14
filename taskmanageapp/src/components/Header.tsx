import React from 'react';
import { signOut } from 'next-auth/react';

const Header = () => {
    return (
        <header className="py-4 px-6 bg-gray-800 text-white flex justify-between items-center">
            <h1 className="text-xl font-bold">Tasks</h1>
            <button 
                className="bg-red-500 text-white py-2 px-4 rounded"
                onClick={() => signOut()}
            >
                ログアウト
            </button>
        </header>
    );
};

export default Header;
