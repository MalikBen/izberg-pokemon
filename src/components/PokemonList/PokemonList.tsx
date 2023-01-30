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
      <div className="grid-container">
        {pokemons.map((pokemon: Pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
