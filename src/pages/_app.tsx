import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { Inter } from '@next/font/google';
import { Provider } from 'react-redux';

import client from 'api/client';
import store from 'redux/store';

const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'fallback'
});

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
};
