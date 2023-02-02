import React, { useCallback, useEffect, useState } from 'react';

import PokemonList from 'components/PokemonList/PokemonList';

import Pagination from 'components/Pagination/Pagination';
import { useLazyQuery } from '@apollo/client';
import GET_POKEMONS from '../api/queries/getPokemons';
import dataToPokemons from '../api/mappers/dataToPokemons';
import { LIMIT } from '../utils/constants';

const containerStyle = 'mx-auto bg-slate-900 px-32 py-20';

export type IPageId = number;

const Index = () => {
  const [pageId, setPageId] = useState<IPageId>(0);
  const [getPokemonsQuery, { data, loading, error }] = useLazyQuery(GET_POKEMONS);
  const { data: pokemons, total } = dataToPokemons(data);

  useEffect(() => {
    getPokemonsQuery({ variables: { limit: LIMIT, offset: pageId * LIMIT } });
  }, [getPokemonsQuery, pageId])

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={containerStyle}>
      <Pagination pageId={pageId} total={total} setPageId={setPageId} />
      <PokemonList pokemons={pokemons} />
      <Pagination pageId={pageId} total={total} setPageId={setPageId} />
    </div>
  );
};

export default Index;
