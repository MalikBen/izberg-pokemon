import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from 'api/client';

import PokemonList from 'components/PokemonList/PokemonList';

const containerStyle = 'mx-auto bg-slate-900 p-20';

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
