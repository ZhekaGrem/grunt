import React from 'react';
import Image from 'next/image';
import ThemeSwitcher from '@/app/components/layout/SwitcherTheme';
import Link from 'next/link';
import SearchInput from '../common/SearchInput';
const Header = () => {
  return (
    <>
      <header>
        <nav className="light:bg-white border-b-4 border-double border-black bg-white dark:border-yellow-600 dark:bg-gray-800">
          <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <Image
                src="/logo.png"
                width={80}
                height={100}
                priority={true}
                className="h-auto w-auto max-w-14 sm:max-w-20"
                alt=" Logo"
              />
            </Link>
            <div className="flex md:order-2">
              <SearchInput />
              <button
                data-collapse-toggle="navbar-search"
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
                aria-controls="navbar-search"
                aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
              <ThemeSwitcher />
            </div>
            <div
              className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
              id="navbar-search">
              <div className="relative mt-3 md:hidden">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                  <svg
                    className="h-4 w-4 text-gray-500 dark:text-gray-400"
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
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 ps-10 text-sm text-gray-900 focus:border-red-500 focus:ring-red-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-red-500 dark:focus:ring-red-500"
                  placeholder="Search..."
                />
              </div>
              <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 p-4 font-medium dark:border-gray-700 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
                <li key={1}>
                  <Link
                    href="/"
                    className="block rounded px-3 py-2 text-3xl text-gray-900 hover:text-red-500 dark:text-white dark:hover:text-red-500 md:bg-transparent md:p-0"
                    aria-current="page">
                    РЕЦЕПТИ
                  </Link>
                </li>
                {/* <li key={2}>
                  <Link
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0  dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 dark:hover:text-red-500">
                    БАЗА
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
