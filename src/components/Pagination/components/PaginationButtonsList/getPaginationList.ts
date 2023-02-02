import { IPagination } from 'components/Pagination/Pagination';
import getTotalPages from 'components/Pagination/getTotalPages';

const getPaginationList = ({ pageId, total }: IPagination): number[] => {
  if (pageId === null) {
    return [];
  }

  const totalPages = getTotalPages(total);

  if (pageId < 3) {
    return [1, 2, 3, 4, -1, totalPages];
  }

  if (pageId > totalPages - 4) {
    return [1, -1, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  }

  return [1, -1, pageId, pageId + 1, pageId + 2, -1, totalPages];
};

export default getPaginationList;
