'use client';
import React, { useState } from 'react';
import Link from 'next/link';

import type { RecipeProps } from '@/type/index';

const SideBar: React.FC<RecipeProps> = ({ recipedata }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="top-20 ms-3 mt-2 inline-flex rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden">
        <span className="sr-only">Open sidebar</span>
        <svg
          className="h-6 w-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <aside
        className={`fixed left-0 top-0 z-40 h-screen w-64 transition-transform md:static md:top-20 ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} `}
        aria-label="Sidebar">
        <div className="h-full overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium"></ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
