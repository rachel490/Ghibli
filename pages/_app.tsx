import type { AppProps } from "next/app";
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client'
import "../styles/globals.css";

const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql',
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
        <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
