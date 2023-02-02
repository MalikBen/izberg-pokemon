import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import PaginationButtonsList from './components/PaginationButtonsList/PaginationButtonsList';
import getTotalPages from './getTotalPages';

export interface IPagination {
  pageId: number;
  total: number;
  setPageId?: (id: number) => void
};

const chevronStyle = 'w-8 h-8 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer';

const Pagination = ({ pageId, total, setPageId }: IPagination) => {
  const totalPages = getTotalPages(total);
  const activePrevButton = pageId > 0;
  const activeNextButton = pageId < totalPages - 1;

  const onPrevious = () => activePrevButton && setPageId && setPageId(pageId - 1);
  const onNext = () => activeNextButton && setPageId && setPageId(pageId + 1);

  return (
    <div className="flex flex-col items-center my-12">
      <div className="flex text-gray-700">
        {
          activePrevButton &&
          <div className={`${chevronStyle} mr-1`}>
            <ChevronLeftIcon className="w-4 h-4" onClick={onPrevious} />
          </div>
        }
        <div className="flex h-8 font-medium rounded-full bg-gray-200">
          <PaginationButtonsList pageId={pageId} total={total} setPageId={setPageId} />
        </div>
        {
          activeNextButton &&
          <div className={`${chevronStyle} ml-1`}>
            <ChevronRightIcon className="w-4 h-4" onClick={onNext} />
          </div>
        }
      </div>
    </div>
  );
};

export default Pagination;