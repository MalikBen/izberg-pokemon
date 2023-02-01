import React from 'react';
import { usePokemons } from 'api/usePokemons';
import PokemonCard from 'components/PokemonCard/PokemonCard';
import { Pokemon } from 'models/Pokemon';

const PokemonList = () => {
  const { pokemons, loading, error } = usePokemons();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
