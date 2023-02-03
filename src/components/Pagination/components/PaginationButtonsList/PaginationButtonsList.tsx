import React from 'react';
import { IPagination } from 'components/Pagination/Pagination';

import getPaginationList from './getPaginationList';
import PaginationButton from 'components/Pagination/components/PaginationButton/PaginationButton';

const PaginationButtonsList = ({ pageId, total, setPageId }: IPagination) => {
  const paginationButtons = getPaginationList({ pageId, total });
  const realPageId = pageId !== null ? pageId + 1 : 0;

  const content = paginationButtons.map((page, index) => {
    const key = `button-${page}-${index}`;
    const isActive = page === realPageId;
    const onClick = () => setPageId && setPageId(page - 1);

    return (
      <PaginationButton
        key={key}
        onClick={onClick}
        isActive={isActive}
        value={page}
      />
    );
  });

  return <>{content}</>;
};

export default PaginationButtonsList;
