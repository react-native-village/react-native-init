import React, {useEffect, useMemo, useState} from 'react';

import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {WalletConnectProvider} from '@walletconnect/react-native-dapp/dist/providers';
import {StatusBar, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {App} from 'src/app';
import {Modals} from 'src/screens/modals';
import {githubAuth} from 'src/services';
import {githubApiGraphQL, lensApiGraphQL} from 'src/variables';

import {ThemeProvider} from './contexts';

const httpLink = createHttpLink({
  uri: githubApiGraphQL,
});

const lenLink = new HttpLink({
  uri: lensApiGraphQL,
});

export function AppWithProviders() {
  const [accessToken, setAccessToken] = useState<any>();

  useEffect(() => {
    const onTokenChange = (access_token: string) => {
      setAccessToken(access_token);
    };
    githubAuth.on('gh-auth-change-token', onTokenChange);
  });

  const client = useMemo(() => {
    const githubLink = setContext(async (_, {headers}) => {
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
      };
    });
    return new ApolloClient({
      link: ApolloLink.split(
        operation => operation.getContext().clientName === 'lenLink',
        lenLink,
        githubLink.concat(httpLink),
      ),
      cache: new InMemoryCache(),
    });
  }, [accessToken]);

  return (
    <WalletConnectProvider
      redirectUrl={'dapp.joker://'}
      storageOptions={{
        asyncStorage: AsyncStorage as any,
      }}>
      <ThemeProvider>
        <GestureHandlerRootView style={styles.flexOne}>
          <SafeAreaProvider>
            <ApolloProvider client={client}>
              <StatusBar />
              <App />
              <Modals />
            </ApolloProvider>
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </ThemeProvider>
    </WalletConnectProvider>
  );
}

const styles = StyleSheet.create({
  flexOne: {flex: 1},
});
