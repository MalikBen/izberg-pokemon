import React from 'react';
import PokemonCardsSkeleton from 'components/PokemonCard/components/PokemonCardSkeleton/PokemonCardSkeleton';

interface IPokemonListSkeleton {
  cardsNumber: number;
};

const PokemonListSkeleton = ({ cardsNumber }: IPokemonListSkeleton) => {
  const content = Array.from(Array(cardsNumber), (e, i) => {
    return <PokemonCardsSkeleton />
  });

  return <>{content}</>
};

export default PokemonListSkeleton;
