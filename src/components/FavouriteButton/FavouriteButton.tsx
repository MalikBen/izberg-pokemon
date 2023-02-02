import React from 'react';
import { HeartIcon } from '@heroicons/react/24/solid';
import { HeartIcon as EmptyHeartIcon } from '@heroicons/react/24/outline';

interface IFavouriteButton {
  isActive: boolean;
  onClick: () => void;
}

const defaultStyle = 'bg-white w-8 h-8 origin-center rounded-full p-2 hover:scale-125 ease-in-out duration-300 transition-all';

const FavouriteButton = ({ isActive, onClick }: IFavouriteButton) => {
  const colorStyle = isActive ? 'text-red-600' : 'text-slate-400 hover:text-red-600';
  const icon = isActive ? <HeartIcon className="w-full h-full" /> : <EmptyHeartIcon className="w-full h-full" />;
  return (
    <div className={`${defaultStyle} ${colorStyle}`} onClick={onClick}>{icon}</div>
  );
};

export default FavouriteButton;
