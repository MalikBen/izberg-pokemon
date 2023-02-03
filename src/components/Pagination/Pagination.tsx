import { ChevronDoubleLeftIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import React from 'react';

import PaginationButtonsList from './components/PaginationButtonsList/PaginationButtonsList';

import getTotalPages from './getTotalPages';

export interface IPagination {
  pageId: number;
  total: number;
  setPageId?: (id: number) => void;
}

const chevronStyle = 'w-8 h-8 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer p-2 hover:text-purple-500 hover:scale-110 transition-all';

const Pagination = ({ pageId, total, setPageId }: IPagination) => {
  const totalPages = getTotalPages(total);

  const activePrevButton = pageId > 0;
  const activeNextButton = pageId < totalPages - 1;

  const onPrevious = () => setPageId && setPageId(pageId - 1);
  const onNext = () => setPageId && setPageId(pageId + 1);

  return (
    <div className="flex flex-col my-12 text-lg items-end">
      <div className="flex text-gray-700">
        {
          activePrevButton
          && <div className={`${chevronStyle} mr-1`} onClick={onPrevious}>
            <ChevronLeftIcon className="w-full h-full" />
          </div>
        }
        <div className="flex min-w-[12em] justify-around h-8 font-medium rounded-full bg-gray-200 px-2">
          <PaginationButtonsList pageId={pageId} total={total} setPageId={setPageId} />
        </div>
        {
          activeNextButton
          && <div className={`${chevronStyle} ml-1`} onClick={onNext}>
            <ChevronRightIcon className="w-full h-full" />
          </div>
        }
      </div>
    </div>
  );
};

export default Pagination;
