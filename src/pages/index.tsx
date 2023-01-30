import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from 'api/client';

import PokemonList from 'components/PokemonList/PokemonList';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <PokemonList />
    </ApolloProvider>
  );
};

export default App;
