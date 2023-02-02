import React from 'react';
import { IPagination } from 'components/Pagination/Pagination';

import getPaginationList from './getPaginationList';

const paginationButtonStyle = 'md:flex justify-center items-center cursor-pointer px-3 hover:text-purple-500 hover:font-bold';
const activeStyle = 'font-bold text-orange-500';

const PaginationButtonsList = ({ pageId, total, setPageId }: IPagination) => {
  const paginationButtons = getPaginationList({ pageId, total });
  const realPageId = pageId !== null ? pageId + 1 : 0;

  const content = paginationButtons.map((item, index) => {
    const key = `button-${item}-${index}`;
    const isActive = item === realPageId;
    if (item < 0) {
      return <div key={key}>...</div>;
    }

    const onClick = () => setPageId && setPageId(item - 1);
    return (
      <div
        key={key}
        onClick={onClick}
        className={`${paginationButtonStyle} ${isActive ? activeStyle : ''}`}
      >
        {item}
      </div>
    );
  });

  return <>{content}</>;
};

export default PaginationButtonsList;
