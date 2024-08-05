'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { RecipeProps, PaginationProps } from '@/type/index';
import { CldImage } from 'next-cloudinary';
import Loading from '@/app/loading';
import SideBar from '@/app/components/layout/SideBar';
import StarIcon from '@/app/components/common/StarIcon';
import useRecipeStore from '@/state/useRecipeStore';
import { tree } from 'next/dist/build/templates/app-page';

const GridColums: React.FC<RecipeProps> = ({ recipedata }) => {
  const { currentPage, itemsPerPage, imgSrc, setCurrentPage, setImgSrc, filteredRecipes, applyFilter } =
    useRecipeStore();

  useEffect(() => {
    applyFilter(recipedata);
  }, [recipedata]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredRecipes.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <>
      <SideBar recipedata={recipedata} />
      <div className="flex w-full flex-col">
        <div className="grid w-full justify-items-center gap-5 p-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {currentItems.map((item, index) => (
            <div
              className="group relative flex transform flex-col overflow-hidden rounded-lg border-4 border-double border-black shadow-lg transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-md hover:shadow-black dark:border-yellow-500 hover:dark:shadow-yellow-500"
              key={item.id || index}>
              <div>
                <Link href={`/recipes/${item.id}`}>
                  <div>
                    <Image
                      className="h-auto min-w-52 max-w-full object-cover"
                      src={imgSrc}
                      width={300}
                      height={100}
                      alt={item.name}
                      priority={true}
                      onError={() => setImgSrc('/2.webp')}
                    />
                  </div>
                  <div className="flex max-w-[70%] flex-grow flex-col overflow-hidden whitespace-nowrap break-words p-2">
                    <div className="mb-1 text-xs text-gray-600">{item.info.type}</div>
                    <h2 className="break-words font-semibold group-hover:underline">{item.name}</h2>
                  </div>
                  <StarIcon className={`${item.info.tested ? 'text-yellow-500' : 'text-gray-400'}`} />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={recipedata.length}
          paginate={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

const Pagination: React.FC<PaginationProps> = ({ itemsPerPage, paginate, currentPage }) => {
  const { filteredRecipes } = useRecipeStore();
  const totalItems = filteredRecipes.length;
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
