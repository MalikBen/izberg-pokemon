import { useQuery } from '@apollo/client';

import dataToPokemons from 'api/mappers/dataToPokemons';
import GET_POKEMONS from 'api/queries/getPokemons';

export const usePokemons = () => {
  const { data, loading, error } = useQuery(GET_POKEMONS);

  return {
    pokemons: dataToPokemons(data),
    loading,
    error
  };
};
