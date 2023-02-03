import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';

import client from 'api/client';
import store from 'redux/store';
import { inter } from 'utils/fonts';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <div className={`${inter.className}`}>
          <Component {...pageProps} />
        </div>
      </Provider>
    </ApolloProvider>
  );
}
