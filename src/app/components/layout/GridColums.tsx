'use client'
import {useState} from 'react';
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
      <div className="flex flex-col w-full">
        <div className="grid md:grid-cols-3  w-full gap-5 p-7 justify-items-center ">
          {currentItems.map((item, index) => (
            <div className="" key={item.id || index}>
              <h4 className=" bg-white  text-zinc-950 dark:bg-black bg-opacity-30 dark:bg-opacity-60 absolute text-3xl dark:text-white   mt-4 ml-10   overflow-hidden  whitespace-nowrap max-w-[70%] md:max-w-[20%] ">
                {item.name}
              </h4>
              <Link href={`/recipes/${item.id}`}>
                <div className="">
                  <Image
                    className="rounded-full border-double border-4 border-black dark:border-yellow-500 h-auto max-w-full  
                    hover:shadow-md hover:shadow-black hover:dark:shadow-yellow-500 "
                    src={imgSrc}
                    width={500}
                    height={500}
                    alt={item.name}
                    onError={() => {
                      setImgSrc('/2.webp');
                    }}
                  />
                </div>
              </Link>
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

// Компонент пагінації
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
    <nav className="flex justify-center mt-4">
      <ul className="flex items-center space-x-2">
        <li>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="hidden sm:block px-3 py-1 border rounded disabled:opacity-50 bg-gray-500 dark:bg-inherit">
            Попередня
          </button>
        </li>
        {startPage > 1 && (
          <>
            <li>
              <button
                onClick={() => paginate(1)}
                className="px-3 py-1 border rounded bg-gray-500 dark:bg-inherit">
                1
              </button>
            </li>
            {startPage > 2 && (
              <li className="bg-gray-500 dark:bg-white dark:text-black px-2 rounded-3xl">...</li>
            )}
          </>
        )}
        {pageNumbers.slice(startPage - 1, endPage).map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`px-3 py-1 border rounded-3xl ${
                currentPage === number ? 'bg-red-500 text-white ' : 'bg-gray-500 dark:bg-white text-black'
              }`}>
              {number}
            </button>
          </li>
        ))}
        {endPage < pageNumbers.length && (
          <>
            {endPage < pageNumbers.length - 1 && (
              <li className=" rounded-3xl px-2 bg-gray-500  dark:bg-white dark:text-black">...</li>
            )}
            <li>
              <button
                onClick={() => paginate(pageNumbers.length)}
                className="px-3 py-1 border rounded bg-gray-500 dark:bg-inherit">
                {pageNumbers.length}
              </button>
            </li>
          </>
        )}
        <li>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === pageNumbers.length}
            className="hidden sm:block px-3 py-1 border rounded disabled:opacity-50 bg-gray-500 dark:bg-inherit">
            Наступна
          </button>
        </li>
      </ul>
    </nav>
  );
};


 export default GridColums;