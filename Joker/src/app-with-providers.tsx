import React, {useEffect} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {WalletConnectProvider} from '@walletconnect/react-native-dapp/dist/providers';
import {StatusBar, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

import {App} from 'src/app';

import {ThemeProvider} from './contexts';

export function AppWithProviders() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <WalletConnectProvider
      redirectUrl={'dapp.joker://'}
      storageOptions={{
        asyncStorage: AsyncStorage as any,
      }}>
      <ThemeProvider>
        <GestureHandlerRootView style={styles.flexOne}>
          <SafeAreaProvider>
            <StatusBar />
            <App />
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </ThemeProvider>
    </WalletConnectProvider>
  );
}

const styles = StyleSheet.create({
  flexOne: {flex: 1},
});
