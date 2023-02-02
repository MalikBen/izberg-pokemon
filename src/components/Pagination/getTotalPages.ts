import { LIMIT } from 'utils/constants';

const getTotalPages = (total: number) => Math.ceil(total / LIMIT);

export default getTotalPages;
