import React from 'react';

import PokemonCard from 'components/PokemonCard/PokemonCard';
import PokemonListSkeleton from 'components/PokemonList/components/PokemonListSkeleton';
import { IPokemon } from 'types/Pokemon';

interface IPokemonList {
  pokemons: IPokemon[];
  loading: boolean;
  favourites: number[];
  onToggleFavourite: (id: number) => void;
}

const PokemonList = ({
  pokemons = [], loading, favourites, onToggleFavourite,
}: IPokemonList) => {
  const content = loading
    ? <PokemonListSkeleton cardsNumber={8} />
    : pokemons.map((pokemon: IPokemon) => {
      const isFavourite = favourites.includes(pokemon.id);
      const toggleFavourite = () => onToggleFavourite(pokemon.id);

      return (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          isFavourite={isFavourite}
          toggleFavourite={toggleFavourite}
        />
      );
    });

  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(160px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-8">
      {content}
    </div>
  );
};

export default PokemonList;
