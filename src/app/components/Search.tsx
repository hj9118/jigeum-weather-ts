'use client';

import { useState } from 'react';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const clearInput = () => {
    setSearchValue('');
  };

  return (
    <div className="relative">
      <input
        className="appearance-none border-2 pl-10 pr-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 text-gray-800 leading-tight focus:outline-none focus:ring-slate-200 focus:border-slate-200 focus:shadow-outline"
        placeholder="검색"
        value={searchValue}
        onChange={handleChange}
      />
      <div
        className="absolute right-0 inset-y-0 flex items-center"
        onClick={clearInput}
      >
        <svg
          xmlns=""
          className="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className="absolute left-0 inset-y-0 flex items-center cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Search;
