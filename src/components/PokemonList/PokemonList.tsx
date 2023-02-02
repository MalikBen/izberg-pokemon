import React from 'react';
import PokemonCard from 'components/PokemonCard/PokemonCard';
import { Pokemon } from 'models/Pokemon';
import PokemonListSkeleton from 'components/PokemonList/components/PokemonListSkeleton';

interface IPokemonList {
  pokemons: Pokemon[];
  loading: boolean;
}

const PokemonList = ({ pokemons = [], loading }: IPokemonList) => {
  const content = loading ? 
    <PokemonListSkeleton cardsNumber={8} />
    : pokemons.map((pokemon: Pokemon) => (
      <PokemonCard key={pokemon.id} pokemon={pokemon} />
    ));

  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-8">
      {content}
    </div>
  );
};

export default PokemonList;
