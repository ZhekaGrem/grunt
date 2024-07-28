'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RecipeType } from '@/type/index';
import { CldImage } from 'next-cloudinary';
import Loading from '@/app/loading';

type GridColumnsProps = {
  recipedata: RecipeType[];
};

const GridColums: React.FC<GridColumnsProps> = ({ recipedata }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
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
        <div className="grid w-full justify-items-center gap-5 p-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
                    {/* <CldImage
                      className="h-auto min-w-52 max-w-full object-cover"
                      src={`grunt/${item.id}`}
                      width={300}
                      height={100}
                      alt={item.name}
                      onError={() => {
                        setImgSrc('/2.webp');
                      }}
                    /> */}
                    <Image
                      className="h-auto min-w-52 max-w-full"
                      src={imgSrc}
                      width={300}
                      objectFit="cover"
                      height={100}
                      alt={item.name}
                      onError={() => {
                        setImgSrc('/2.webp');
                      }}
                    />
                  </div>
                  <div className="flex max-w-[70%] flex-grow flex-col overflow-hidden whitespace-nowrap break-words p-2">
                    <div className="mb-1 text-xs text-gray-600">{item.info.type}</div>
                    <h2 className="break-words font-semibold group-hover:underline">{item.name}</h2>
                  </div>
                  <svg
                    className={`absolute right-1 top-1 me-1 h-6 w-6 ${item.info.tested ? 'text-yellow-500' : 'text-gray-400'}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20">
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
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
