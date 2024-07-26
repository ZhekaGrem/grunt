'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RecipeType } from '@/type/index';

type GridColumnsProps = {
  recipedata: RecipeType[];
};

const GridColums: React.FC<GridColumnsProps> = ({ recipedata }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [imgSrc, setImgSrc] = useState(`/2.webp`);

  // Обчислюємо індекси для поточної сторінки
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = recipedata.slice(indexOfFirstItem, indexOfLastItem);

  // Функція для зміни сторінки
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="flex w-full flex-col">
        <div className="grid w-full justify-items-center gap-5 p-7 md:grid-cols-3">
          {currentItems.map((item, index) => (
            <div
              className="group relative flex transform flex-col overflow-hidden rounded-lg border-4 border-double border-black shadow-lg transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-md hover:shadow-black dark:border-yellow-500 hover:dark:shadow-yellow-500"
              key={item.id || index}>
              {/* <h4 className=" bg-white  text-zinc-950 dark:bg-black bg-opacity-30 dark:bg-opacity-60 absolute text-3xl dark:text-white   mt-4 ml-10   overflow-hidden  whitespace-nowrap max-w-[70%] md:max-w-[20%] ">
                {item.name}
              </h4> */}
              <div>
                <Link href={`/recipes/${item.id}`}>
                  <div>
                    <Image
                      className="h-auto max-w-full"
                      src={imgSrc}
                      width={500}
                      objectFit="cover"
                      height={500}
                      alt={item.name}
                      onError={() => {
                        setImgSrc('/2.webp');
                      }}
                    />
                  </div>
                  <div className="flex max-w-[70%] flex-grow flex-col overflow-hidden whitespace-nowrap p-2">
                    <div className="mb-1 text-xs text-gray-600">{item.info.type}</div>
                    <h2 className="text-lg font-semibold group-hover:underline">{item.name}</h2>
                  </div>
                  {item.info.tested}
                  <svg
                    className={`absolute right-1 top-1 me-1 h-6 w-6 ${item.info.tested ? 'text-yellow-500' : 'text-gray-400'}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={recipedata.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};
type PaginationProps = {
  itemsPerPage: number;
  totalItems: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
};

const Pagination: React.FC<PaginationProps> = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const maxVisibleButtons = 5;
  let startPage, endPage;

  if (pageNumbers.length <= maxVisibleButtons) {
    startPage = 1;
    endPage = pageNumbers.length;
  } else {
    if (currentPage <= Math.floor(maxVisibleButtons / 2) + 1) {
      startPage = 1;
      endPage = maxVisibleButtons;
    } else if (currentPage + Math.floor(maxVisibleButtons / 2) >= pageNumbers.length) {
      startPage = pageNumbers.length - maxVisibleButtons + 1;
      endPage = pageNumbers.length;
    } else {
      startPage = currentPage - Math.floor(maxVisibleButtons / 2);
      endPage = currentPage + Math.floor(maxVisibleButtons / 2);
    }
  }

  return (
    <nav className="mt-4 flex justify-center">
      <ul className="flex items-center space-x-2">
        <li>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="hidden rounded border bg-gray-500 px-3 py-1 disabled:opacity-50 dark:bg-inherit sm:block">
            Попередня
          </button>
        </li>
        {startPage > 1 && (
          <>
            <li>
              <button
                onClick={() => paginate(1)}
                className="rounded border bg-gray-500 px-3 py-1 dark:bg-inherit">
                1
              </button>
            </li>
            {startPage > 2 && (
              <li className="rounded-3xl bg-gray-500 px-2 dark:bg-white dark:text-black">...</li>
            )}
          </>
        )}
        {pageNumbers.slice(startPage - 1, endPage).map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`rounded-3xl border px-3 py-1 ${
                currentPage === number ? 'bg-red-500 text-white' : 'bg-gray-500 text-black dark:bg-white'
              }`}>
              {number}
            </button>
          </li>
        ))}
        {endPage < pageNumbers.length && (
          <>
            {endPage < pageNumbers.length - 1 && (
              <li className="rounded-3xl bg-gray-500 px-2 dark:bg-white dark:text-black">...</li>
            )}
            <li>
              <button
                onClick={() => paginate(pageNumbers.length)}
                className="rounded border bg-gray-500 px-3 py-1 dark:bg-inherit">
                {pageNumbers.length}
              </button>
            </li>
          </>
        )}
        <li>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === pageNumbers.length}
            className="hidden rounded border bg-gray-500 px-3 py-1 disabled:opacity-50 dark:bg-inherit sm:block">
            Наступна
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default GridColums;
