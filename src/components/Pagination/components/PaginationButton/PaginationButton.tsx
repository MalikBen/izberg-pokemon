import React from 'react';

interface IPaginationButton {
  onClick: () => void;
  value: number;
  isActive: boolean;
}

const paginationButtonStyle = 'flex px-2 justify-center items-center cursor-pointer hover:text-purple-500 hover:font-bold';

const PaginationButton = ({ onClick, value, isActive }: IPaginationButton) => {
  if (value < 0) {
    return <div>...</div>;
  }
  const activeStyle = isActive ? 'font-bold text-orange-500' : '';
  return (
    <div
      className={`${paginationButtonStyle} ${activeStyle}`}
      onClick={onClick}
    >
      {value}
    </div>
  );
};

export default PaginationButton;
