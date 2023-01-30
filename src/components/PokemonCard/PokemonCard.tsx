import React from 'react';
import { Pokemon } from 'models/Pokemon';

interface IPokemonCard {
  pokemon: Pokemon
}

const PokemonCard = ({ pokemon }: IPokemonCard) => {
  const { id, name, types } = pokemon;
  return (
    <div>{name}</div>
  );
};

export default PokemonCard;
