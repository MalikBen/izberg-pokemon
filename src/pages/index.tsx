import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from 'api/client';

import PokemonList from 'components/PokemonList/PokemonList';

const containerStyle = 'container mx-auto';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className={containerStyle}>
        <PokemonList />
      </div>
    </ApolloProvider>
  );
};

export default App;
