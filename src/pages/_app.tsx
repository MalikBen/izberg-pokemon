import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { Inter } from '@next/font/google';

import client from 'api/client';

const inter = Inter({
  weight: '400',
  subsets: ['latin']
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <div className={`${inter.className}`}>
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
};
