'use client'
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { RecipeType } from '@/type/index';
import data from '@/db/recipes_ua_1.json';
import { debounce } from 'lodash';
import Link from 'next/link';



const recipedata: RecipeType[] = data;

const SearchInput = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(recipedata);
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const debouncedSearch = useCallback(
      debounce((term) => {
        if (term.length > 0) {
          const results = recipedata.filter(
            (item) =>
              item.name.toLowerCase().includes(term.toLowerCase()) ||
              item.content.data.ingredients.some((ingredient) =>
                ingredient.toLowerCase().includes(term.toLowerCase())
              )
          );
          setSearchResults(results);
          setIsOpen(true);
        } else {
          setSearchResults([]);
          setIsOpen(false);
        }
      }, 300),
      [recipedata]
    );

    useEffect(() => {
      debouncedSearch(searchTerm);
    }, [searchTerm, debouncedSearch]);

  
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [wrapperRef]);
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    };

  return (
    <div className="relative " ref={wrapperRef}>
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span className="sr-only">ПОШУК icon</span>
      </div>
      <input
        type="text"
        id="search-navbar"
        value={searchTerm}
        onChange={handleSearch}
        className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
        placeholder="Пошук..."
      />
      {isOpen && searchResults.length > 0 && (
        <div className="absolute right-1 min-w-60 z-10 w-full mt-1 text-black bg-white rounded-md shadow-lg max-h-80 overflow-auto ">
          <ul>
            {searchResults.map((item) => (
              <li
                className="text-2xl 	border-double border-b-4 border-gray-700 hover:bg-red-400"
                key={item.id}>
                <Link className="" href={`/recipes/${item.id}`}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchInput;
