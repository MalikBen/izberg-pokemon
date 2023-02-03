import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';

import PokemonList from 'components/PokemonList/PokemonList';
import Pagination from 'components/Pagination/Pagination';
import GET_POKEMONS from 'api/queries/getPokemons';
import dataToPokemons from 'api/mappers/dataToPokemons';
import { LIMIT } from 'utils/constants';
import { RootState } from 'redux/store';
import { toggleFavourite } from 'redux/favourites/favouritesSlice';

export type IPageId = number;

const Index = () => {
  const [pageId, setPageId] = useState<IPageId>(0);
  const [cachedTotal, setCachedTotal] = useState<IPageId>(0);

  const [getPokemonsQuery, { data, loading, error }] = useLazyQuery(GET_POKEMONS);
  const { data: pokemons, total } = dataToPokemons(data);

  const dispatch = useDispatch();
  const onToggleFavourite = (id: number) => dispatch(toggleFavourite(id));
  const favourites = useSelector((state: RootState) => state.favourites.favourites);

  useEffect(() => {
    if (total > 0) {
      setCachedTotal(total);
    }
  }, [setCachedTotal, total]);

  useEffect(() => {
    getPokemonsQuery({ variables: { limit: LIMIT, offset: pageId * LIMIT } });
  }, [getPokemonsQuery, pageId]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="mx-auto bg-slate-900 px-10 md:px-32 py-20">
      <Pagination pageId={pageId} total={cachedTotal} setPageId={setPageId} />
      <PokemonList
        pokemons={pokemons}
        loading={loading}
        favourites={favourites}
        onToggleFavourite={onToggleFavourite}
      />
      <Pagination pageId={pageId} total={cachedTotal} setPageId={setPageId} />
    </div>
  );
};

export default Index;
