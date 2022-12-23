import React from 'react';

import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {StatusBar, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {App} from 'src/app';
import {Modals} from 'src/screens/modals';
import {app} from 'src/services';
import {githubApiGraphQL, lensApiGraphQL} from 'src/variables';

const httpLink = createHttpLink({
  uri: githubApiGraphQL,
});

const lenLink = new HttpLink({
  uri: lensApiGraphQL,
});

const authLink = setContext(async (_, {headers}) => {
  const token = app.githubAuth.access_token;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: ApolloLink.split(
    operation => operation.getContext().clientName === 'lenLink',
    lenLink,
    authLink.concat(httpLink),
  ),
  cache: new InMemoryCache(),
});

export function AppWithProviders() {
  return (
    <GestureHandlerRootView style={styles.flexOne}>
      <SafeAreaProvider>
        <ApolloProvider client={client}>
          <StatusBar />
          <App />
          <Modals />
        </ApolloProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  flexOne: {flex: 1},
});