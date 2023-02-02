import React from 'react';
import PokemonCard from 'components/PokemonCard/PokemonCard';
import { Pokemon } from 'models/Pokemon';

interface IPokemonList {
  pokemons: Pokemon[];
}

const PokemonList = ({ pokemons = [] }: IPokemonList) => {
  return (
    <div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-8">
        {pokemons.map((pokemon: Pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
